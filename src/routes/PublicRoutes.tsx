import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}: any) => {

    return (
        <Route { ...rest }
            component={ (props:any) => (
                ( isAuthenticated )
                    ? ( <Redirect to="/" /> )
                    : ( <Component { ...props } /> )
            )}
        
        />
    )
}
