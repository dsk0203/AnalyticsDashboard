import React, {useEffect, useState} from 'react';
import { Link } from '@reach/router'
// react hook that executes logic whenever your component is mounted or not 

export default function DashboardSelector({ axios }) {

    const [dashboardList, setDashboardList] = useState(undefined)


    useEffect(() => {

        axios.get('/api/dashboard-list')
            .then(({data}) => {
                setDashboardList(data)
            })
            // eslint-disable-next-line
    }, []) 

    return (
    <section>
        {dashboardList && dashboardList.map(dashboard => (
            <Link to={dashboard.path} >
                <h3>{dashboard.title}</h3>
                <p>{dashboard.description}</p>
            </Link>
        ))}
    </section>)

}