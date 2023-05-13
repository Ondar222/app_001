import React from 'react';
import styles from './Articles.module.scss'
// import axios from 'axios';



//это относится к Поисковику
const Articles = () => {

    const [City, setCity] = React.useState('Найти')

    React.useEffect(() => {
        if (City === 'Novosibirsk') console.log(City)
    }, [City])


    //а это относится к второму диву после Поисковика

    const [comments, setComments] = React.useState([])
    const [loading, setLoading] = React.useState([true])




    React.useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1')

                const data = await response.json()

                setComments(data)

            } catch (error) {

                console.log(error)
            }
            setLoading(false)
        }
        fetchData()
    }, [])

    return (
        <div>
            <h1>Articles</h1>
            {loading && 'Загрузка...'}
            <div className={styles.wrapper}>

                {comments.map(comments => (
                    <div key={comments.id} className={styles.card}>
                        <h4> {comments.name}  </h4>
                        <p>{comments.email}</p>
                        <p>{comments.body}</p>
                        <a href="/">Read Now</a>
                    </div>

                ))}
            </div>
        </div>
    );









    //     const [City, setCity] = React.useState('Moscow')

    // React.useEffect(() => {
    //     if(City === 'Novosibirsk') console.log(City)
    // }, [City])

    //     return (
    //         <div>
    //             <h1>Articles</h1>
    //             <input type="text" value={City} onChange={(e) => setCity(e.target.value)} placeholder='Enter city' />
    //             <div className={styles.card}>
    //                 <img src="" alt="" />
    //                 <h4>
    //                     <a href="/">Read Now</a>
    //                 </h4>
    //             </div>
    //         </div>
    //     );
};





export default Articles;
