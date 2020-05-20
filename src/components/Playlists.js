import React from 'react'
import { ReactComponent as PlayIcon } from '../svgs/play.svg'
import {Link} from 'react-router-dom'

const Playlists = (props) => {
    console.log(props.limiter)
    const dataPlaylists=[
        {
            id: 101,
            category_id: 3,
            name: 'Home playlist 1',
            img: 'https://images.unsplash.com/photo-1589758188196-98febadd4d55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 102,
            category_id: 3,
            name: 'Home playlist 2',
            img: 'https://images.unsplash.com/photo-1589786016577-0e416d56a798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 103,
            category_id: 3,
            name: 'Home playlist 3',
            img: 'https://images.unsplash.com/photo-1589676638804-d0890976e3e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=315&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 104,
            category_id: 1,
            name: 'Focus playlist 1',
            img: 'https://images.unsplash.com/photo-1589667823545-7519b00a5ad3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 105,
            category_id: 4,
            name: 'Sunday playlist',
            img: 'https://images.unsplash.com/photo-1589742906617-6ffabcf981f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 106,
            category_id: 2,
            name: 'Mood playlist',
            img: 'https://images.unsplash.com/photo-1589677118801-d210f486d06f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
        {
            id: 107,
            category_id: 2,
            name: 'Mood playlist',
            img: 'https://images.unsplash.com/photo-1586387623743-d70f8d4d752c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
            des: 'Loren ipsum'
        },
    ]

    const matchedPlaylists = dataPlaylists.filter(playlist => playlist.category_id === props.category_id).slice(0, props.limiter)

    return (
        <div className="cardsWrapInner">

            { matchedPlaylists.map((playlist, id) => (
                <Link to={`/playlist/`+playlist.id} key={id}>
                    <div className="card" >
                        <div className="cardImage">
                            <img 
                                src={playlist.img} 
                                alt="Pic 1"
                            />
                        </div>
                        <div className="cardContent">
                            <h3>{playlist.name}</h3>
                            <span>
                                {playlist.des}
                            </span>
                        </div>
                        <span className="playicon">
                            <PlayIcon />
                        </span>
                    </div>
                </Link>
            ))}

        </div>
    )
}

export default Playlists