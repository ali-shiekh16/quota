import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout/Layout";

export function AppRoute({ children, protect }) {
    return (
        <>
            {!protect ? <Layout>
                {children}
            </Layout> : <Navigate to="/login" />}
        </>
    )
}