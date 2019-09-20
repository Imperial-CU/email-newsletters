import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

const placeholderText =
  "In Christ,\n\n" +
  "**Yvonne Winterborn**<br />\n" +
  "<small>ICCU Secretary</small>";

const style = {
  minHeight: "20em"
};

class ContentMarkdownEditor extends Component {
  componentDidMount() {
    const { setContentMarkdown } = this.props;

    // Yes, I know this is hacky and bad
    setContentMarkdown({ target: { value: placeholderText } });
  }

  render() {
    const { setContentMarkdown } = this.props;
    return (
      <Fragment>
        <label htmlFor="contentMarkdownEditor">Email content (markdown)</label>
        <textarea
          className="u-full-width"
          id="contentMarkdownEditor"
          onChange={setContentMarkdown}
          style={style}
        >
          {placeholderText}
        </textarea>
      </Fragment>
    );
  }
}

ContentMarkdownEditor.propTypes = {
  setContentMarkdown: PropTypes.func.isRequired
};

export default ContentMarkdownEditor;
