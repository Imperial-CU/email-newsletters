import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";

const placeholderText =
  "[iccu.co.uk](http://iccu.co.uk/)\n\n" +
  "You've received our weekly newsletter as you've signed up to receive emails from " +
  "Imperial College Christian Union.\n\n[" +
  "Click here to unsubscribe.](http://lists.iccu.co.uk/mailman/listinfo/iccumail)";

class FooterMarkdownEditor extends Component {
  componentDidMount() {
    const { setFooterMarkdown } = this.props;

    // Yes, I know this is hacky and bad
    setFooterMarkdown({ target: { value: placeholderText } });
  }

  render() {
    const { setFooterMarkdown } = this.props;
    return (
      <Fragment>
        <label htmlFor="footerMarkdownEditor">Footer text (markdown)</label>
        <textarea
          className="u-full-width"
          id="footerMarkdownEditor"
          onChange={setFooterMarkdown}
          style={{ minHeight: "8em" }}
        >
          {placeholderText}
        </textarea>
      </Fragment>
    );
  }
}

FooterMarkdownEditor.propTypes = {
  setFooterMarkdown: PropTypes.func.isRequired
};

export default FooterMarkdownEditor;
