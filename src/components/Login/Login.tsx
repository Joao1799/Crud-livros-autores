import { useState } from "react";
import { postLogin } from "../../services/Login"
import * as S from "./Login.Styled"


interface LoginProps {
    onLogin: () => void;
}

export const Login = ({ onLogin }: LoginProps) => {
    const [username, setUsername] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await postLogin(username, Number(senha));
            if (response && response.name) {
                onLogin();
            } else {
                setError('Usuário ou senha inválidos.');
            }
        } catch (err) {
            console.error(err);
            setError('Erro ao tentar fazer login.');
        }
    };

    return (
        <S.Container>
            <S.boxLogin>
                <S.Header>
                <p>Seja Bem-Vindo!</p>
                <S.H1>Login</S.H1>
                </S.Header>
            
            <S.Form onSubmit={handleSubmit}>
                <S.Label>Usuário:</S.Label>
                <S.Input
                    placeholder="Usuário..."
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <S.Label>Senha:</S.Label>
                <S.Input
                    placeholder="Senha..."
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
                <S.Footer>
                    <S.Buttom type="submit">Entrar</S.Buttom>
                </S.Footer>
            </S.Form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            </S.boxLogin>
        </S.Container>
    );
}