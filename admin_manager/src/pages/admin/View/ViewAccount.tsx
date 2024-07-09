import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getUserById } from '../../../api/UserAPI';
import ViewUser from './ViewUser';
import { User } from '../../../models/User';
import { Spinner } from 'react-bootstrap';

const ViewAccount = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const { id } = useParams();
  const userId = parseInt(id ?? '0', 10);

  useEffect(() => {
    if (!Number.isNaN(userId) && userId > 0) {
      setLoading(true);
      getUserById(userId)
        .then((user) => {
          setUser(user)
        })
        .catch((error) => {
          console.error('Error fetching user:', error);
          setError('Failed to fetch user data.');
          navigate("/admin")
        })
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError('Invalid user ID.');
    }
  }, [userId]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {loading ? <Spinner animation="border" style={{ marginTop: "1000px" }} /> :
        (user ? <ViewUser user={user} setUser={setUser} /> : <div>User not found.</div>)
      }
    </>
  );
};

export default ViewAccount;
