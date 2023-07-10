import UserEditProfile from '../../components/EditProfile';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import AnimatePage from '../../components/AnimatePage';
import { useEffect, useContext } from 'react';
import { SearchContext } from '../../App';

function EditProfile() {

    const location = useLocation();

    const { setSuggestions, setPageNum } = useContext(SearchContext);

    useEffect(() => {
        setSuggestions([]);
        setPageNum(1);
    }, [setSuggestions, setPageNum]);

    return (localStorage.getItem('access') ?
        (<AnimatePage >
                <UserEditProfile/>
        </AnimatePage>) : (<Navigate to='/unauthorized' state={{path: location.pathname}} />)
    );
  }
  
  export default EditProfile;
