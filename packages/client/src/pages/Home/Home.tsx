import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { GithubIcon } from '~/components/vectors';
const Home = () => {
  const navigate = useNavigate();
  const handleGithubLogin = () => {
    navigate('/room');
  };

  return (
    <Container>
      <GithubLoginButton onClick={handleGithubLogin}>
        <GithubIcon width="24px" height="24px" fill="#aaaaaa" />
        <span>Login With Github</span>
      </GithubLoginButton>
    </Container>
  );
};

const GithubLoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 50px;
  color: #aaaaaa;
  font-size: 1.2rem;
  span {
    margin-left: 1rem;
  }
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  z-index: 1;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  overflow: hidden;
  transition: top 0.5s, z-index 0s, transform 0.5s;
  transition-delay: 0.1s, 0.1s, 0s;

  &:hover {
    transition-delay: 0s, 0.5s, 0.5s;
    top: -50px;
    z-index: 11;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    transform: skewX(45deg) translateX(300px);
    transition: 1.2s;
  }

  &:hover:before {
    transform: skewX(45deg) translateX(-300px);
  }
`;

const Container = styled.div`
  margin: auto auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 300px;
  border-radius: 20px;
  // grassmorphism
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
`;

export default Home;
