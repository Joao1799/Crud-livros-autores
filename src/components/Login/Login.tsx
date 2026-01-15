import { useState } from "react";
import { postLogin } from "../../services/Login";
import * as S from "./Login.Styled";
import * as So from "../Table/Table.Styled";

interface LoginProps {
  onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await postLogin({ email, senha });
      if (response && response.user.email) {
        onLogin();
      } else {
        setError("Usuário ou senha inválidos.");
      }
    } catch (err) {
      console.error(err);
      setError("Erro ao tentar fazer login.");
    }finally {
      setLoading(false); 
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const loginResp = await postLogin({ email, senha });
      if (loginResp && loginResp.user && loginResp.user.name && loginResp.user.email) {
        onLogin();
      } else {
        setError("Erro ao fazer login. Tente novamente.");
      }
  
    } catch (err: any) {
      console.error("Erro no processo de registro/login:", err);
      setError(err.message || "Erro ao tentar registrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.Container>
      {loading && (
        <So.LoadingOverlay>
          <So.Spinner />
        </So.LoadingOverlay>
      )}  
      <S.boxLogin>
        <S.Header>
          <p>{isRegistering ? "Crie sua conta!" : "Seja Bem-Vindo!"}</p>
          <S.H1>{isRegistering ? "Registro" : "Login"}</S.H1>
        </S.Header>

        <S.Form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <>
              <S.Label>Nome:</S.Label>
              <S.Input
                placeholder="Seu nome..."
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              <S.Label>Email:</S.Label>
              <S.Input
                placeholder="Seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          {!isRegistering && (
            <>
              <S.Label>Email:</S.Label>
              <S.Input
                placeholder="Seu email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </>
          )}

          <S.Label>Senha:</S.Label>
          <S.Input
            placeholder="Senha..."
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          <S.Footer>
            <S.Buttom type="submit">
              {isRegistering ? "Registrar" : "Entrar"}
            </S.Buttom>
          </S.Footer>
        </S.Form>

        <S.Buttom onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering
            ? "Já tem conta? Faça login"
            : "Não tem conta? Registre-se"}
        </S.Buttom>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </S.boxLogin>
    </S.Container>
  );
};
