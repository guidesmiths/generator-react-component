import { connect } from "react-redux";
import { withRouter } from 'react-router';

import <%= nameUp %> from './<%= name %>.component';

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = {
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(<%= nameUp %>));
