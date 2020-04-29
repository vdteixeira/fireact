import React, {useContext} from 'react';  
import { Route, Redirect, withRouter } from "react-router-dom";
import { AuthContext } from "../FirebaseAuth";

const AuthRouter = ({component: Component, template: Template, title: Title, ...rest}) => {
    
    document.title = Title;

    const {authUser} = useContext(AuthContext);
    
    return ( 
        <Route
            {...rest}
            render={ matchProps => (
                authUser.checked ? (
                    !!authUser.user ? (
                    
                        <Template {...rest}>
                            <Component {...matchProps} />  
                        </Template>
                    ):(
                        <Redirect to={"/signin"} />
                    )
                ):(
                    <></>
                )
            )}
        />
    );
}
export default withRouter(AuthRouter);