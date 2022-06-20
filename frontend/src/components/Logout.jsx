import { axios } from "../api";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unload_user } from "../store/slices/authSlice";
import LogoutIcon from '@mui/icons-material/Logout';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';



export default function Logout(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogout = () => {
        const response = axios.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),
        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axios.defaults.headers['Authorization'] = null;
        dispatch(unload_user())
        navigate('/');
    }

    return (
        <MenuItem onClick={handleLogout}>
            <ListItemIcon>
                <LogoutIcon fontSize="small" />
            </ListItemIcon>
            Logout
        </MenuItem>
    )

}