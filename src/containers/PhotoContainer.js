import React, {useState, useEffect} from 'react'
import {baseService} from "../services";
import {withRouter} from "react-router";
import ImageCard from "../components/ImageCard";

const PhotoContainer = (props) => {
    const [photos, setPhotos] = useState([])
    const albumId = props.location.pathname.replace(/[^0-9\.]+/g, '');
    useEffect(() => {
        async function fetchPostsData() {
            const result = await baseService().getPhotosByAlbumId(albumId)

            console.log(result.data)
            setPhotos(result.data)
        }

        fetchPostsData();
    }, [])

    return (
        <div>
        {
            photos &&
            photos.map((photo, idx) => {
                return (
                    <ImageCard photo={photo} key={idx}/>
                )
        })
        }
        </div>

    )
}

export default withRouter(PhotoContainer)

