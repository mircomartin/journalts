import { Redirect, Route, Switch } from "react-router"
import { AuthRoutes } from "./AuthRoutes"
import { JournalScreen } from '../components/journal/JournalScreen';
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from "react-redux";
import { ActionType } from "../redux/types";

export const Routes = () => {

    const dispatch = useDispatch()

    useEffect(() => {

        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {

            if ( user?.uid ) {

                const { uid, displayName } = user

                dispatch({
                    type: ActionType.LOGIN,
                    payload: {
                        uid,
                        displayName
                    }
                })
                
            }
        } )

    }, [])

    return (
        <div>
            <Switch>
                <Route path="/auth" component={AuthRoutes}/>
                <Route exact path="/" component={JournalScreen}/>

                <Redirect to="/auth/login" />

            </Switch>
        </div>
    )
}
