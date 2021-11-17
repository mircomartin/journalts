import { Redirect, Route, Switch } from "react-router"
import { AuthRoutes } from "./AuthRoutes"
import { JournalScreen } from '../components/journal/JournalScreen';

export const Routes = () => {
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
