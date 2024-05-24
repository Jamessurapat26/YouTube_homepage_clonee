import PropTypes from 'prop-types';

function ShortCard({ content }) {

    const { vdo_url, title, view_count } = content;

    const formatViewCount = (count) => {
        if (count < 1000) return count;
        if (count < 1000000) return (count / 1000).toFixed(1) + 'K';
        if (count < 1000000000) return (count / 1000000).toFixed(1) + 'M';
        return (count / 1000000000).toFixed(1) + 'B';
    };



    return (
        <div className="short">
            <div className="-thumb">
                <img src={vdo_url} alt="" />
            </div>
            <div className="-about">
                <div className="-detail">
                    <a href="" className="title">{title}</a>
                    <div className="views">{formatViewCount(view_count)} views</div>
                </div>
            </div>
        </div>
    )
}

ShortCard.propTypes = {
    content: PropTypes.shape({
        vdo_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        vdo_create_date: PropTypes.string, // You might want to adjust the type here
        view_count: PropTypes.number.isRequired
    }).isRequired
};


export default ShortCard