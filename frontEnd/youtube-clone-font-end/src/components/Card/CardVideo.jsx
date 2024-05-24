import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
// import { useEffect } from 'react';

function CardVideo({ content }) {

    const { thumb_url, channel_profile_url, title, channel_name, view_count, vdo_create_date } = content;

    // useEffect(() => {
    //     console.log(content.thumb_url);
    // }, [])

    const formatViewCount = (count) => {
        if (count < 1000) return count;
        if (count < 1000000) return (count / 1000).toFixed(1) + 'K';
        if (count < 1000000000) return (count / 1000000).toFixed(1) + 'M';
        return (count / 1000000000).toFixed(1) + 'B';
    };

    const formatVdoCreateDate = (dateString) => {
        const date = new Date(dateString);
        return formatDistanceToNow(date, { addSuffix: true });
    };


    return (
        <div className="-card">
            <div className="-thumb">
                <img src={thumb_url} alt="" />
            </div>
            <div className="-about">
                <div className="-img-channel">
                    <img src={channel_profile_url} alt="" />
                </div>
                <div className="-detail">
                    <div className="-title">{title}</div>
                    <div className="-channel-name">{channel_name}</div>
                    <div className="views">{formatViewCount(view_count)} Views • {formatVdoCreateDate(vdo_create_date)}</div>
                </div>
            </div>
        </div>
    )
}

CardVideo.propTypes = {
    content: PropTypes.shape({
        vdo_id: PropTypes.number.isRequired,
        vdo_url: PropTypes.string.isRequired,
        thumb_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        view_count: PropTypes.number.isRequired,
        vdo_create_date: PropTypes.string.isRequired,
        channel_id: PropTypes.number.isRequired,
        channel_name: PropTypes.string.isRequired,
        channel_profile_url: PropTypes.string.isRequired,
    }).isRequired
};

export default CardVideo