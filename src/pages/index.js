import React from "react";
import {Page} from './page'
import {UserContainer} from "../containers/UserContainer";
import TabContainer from "../containers/TabContainer";
import PhotoContainer from "../containers/PhotoContainer";
import PostDetailContainer from "../containers/PostDetailContainer";
import TabContent from "../components/TabContent";



export const UserPage = props => {
    return (
        <Page>
            <div className="container">
                <div className="flex-between">
                    <TabContainer {...props} />
                    <UserContainer {...props} />
                </div>
            </div>
        </Page>
    );
};

export const PhotosPage = props => {
    return (
        <Page>
            <div className="container">
                <div className="flex-between">
                    <PhotoContainer {...props} />
                    <UserContainer {...props} />
                </div>
            </div>
        </Page>
    );
};

export const PostDetailPage = props => {
    return (
        <Page>
            <div className="container">
                <div className="flex-between">
                    <PostDetailContainer {...props} />
                    <UserContainer {...props} />
                </div>
            </div>
        </Page>
    );
};
