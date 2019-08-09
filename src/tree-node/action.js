import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Parser from 'html-react-parser'

class Action extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    className: PropTypes.string,
    actionData: PropTypes.object,
    onAction: PropTypes.func,
    readOnly: PropTypes.bool,
  }

  static defaultProps = {
    onAction: () => {},
  }

  handleClick = () => {
    const { onAction, actionData } = this.props
    if (onAction) {
      onAction(actionData.nodeId, actionData.action)
    }
  }

  render() {
    const { title, className, text, readOnly } = this.props

    return (
      <i title={title} className={className} onClick={!readOnly ? this.handleClick : undefined}>
        {Parser(text)}
      </i>
    )
  }
}

export default Action
