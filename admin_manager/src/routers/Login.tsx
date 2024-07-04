import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { login } from '../api/AuthenticationAPI';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

interface CustomJwtPayload extends JwtPayload {
    authorities: { authority: string }[];
}

interface LoginProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface CopyrightProps extends TypographyProps {
}
function Copyright(props: CopyrightProps) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Auction DGS
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export const Login: React.FC<LoginProps> = ({ setIsLoggedIn }) => {
    const [error, setError] = React.useState("");
    const [loginRequest, setLoginRequest] = React.useState({
        username: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoginRequest({ ...loginRequest, email: loginRequest.username });
        const success = await login(loginRequest, setError)
        if (success) {
            const token = localStorage.getItem("access_token");
            if (token) {
                const decodedData = jwtDecode<CustomJwtPayload>(token);
                const userRole = decodedData.authorities[0].authority;
                navigate(userRole === 'ADMIN' ? '/admin' : '/manager');
                setIsLoggedIn(true);
            }
        }
    };

    React.useEffect(() => {
        const token = localStorage.getItem("access_token");
        if (token) {
            const decodedData = jwtDecode<CustomJwtPayload>(token);
            const userRole = decodedData.authorities[0].authority;
            navigate(userRole === 'ADMIN' ? '/admin' : '/manager');
        }
    }, [navigate]);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 30,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <img style={{ width: '100px', marginBottom: '10px' }} src="/assets/img/menu/logo/1.png" alt="logo" />
                    <Typography component="h1" variant="h5">
                        Đăng nhập
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="text"
                            label="Tên tài khoản"
                            name="username"
                            autoFocus
                            onChange={(e) => setLoginRequest({ ...loginRequest, username: e.target.value })}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Mật khẩu"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setLoginRequest({ ...loginRequest, password: e.target.value })}
                        />
                        {/* <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Nhớ mật khẩu"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            style={{ color: "#000", backgroundColor: "#FFC700" }}
                        >
                            Đăng nhập
                        </Button>
                        {error && <span className='fw-bold text-danger'>{error}</span>}
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}