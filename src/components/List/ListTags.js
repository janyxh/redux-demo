import React from "react"

import { Tag, Input, Tooltip, Icon } from 'antd';
import { connect } from "react-redux"
import { getList, addListCount } from '../../store/actions/list'

class ListTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVisible: false,
      inputValue: ''
    }
  }

  componentDidMount() {
    this.props.onGetList()
    this.setState({
      tags: this.props.tags
    })
  }

  // 关闭标签
  handleClose = removedTag => {
  };

  // 显示标签输入框
  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus());
  };

  // 处理输入框value值变化
  handleInputChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  // 处理添加标签
  handleInputConfirm = () => {
    const { inputValue } = this.state;
    let { tags } = this.props;
    if (inputValue && tags.indexOf(inputValue) === -1) {
      this.props.onAddList(this.props.tags, inputValue)
    }
    this.setState({
      inputVisible: false,
      inputValue: '',
    });
  };

  saveInputRef = input => (this.input = input);

  render() {
    const { inputVisible, inputValue } = this.state;
    const { tags } = this.props
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20;
          const tagElem = (
            <Tag key={tag.id} color="magenta" closable={index !== 0} onClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.text.slice(0, 20)}...` : tag.text}
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
              tagElem
            );
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag onClick={this.showInput} style={{ background: '#fff', borderStyle: 'dashed' }}>
            <Icon type="plus" /> New Tag
          </Tag>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetList: () => {
      dispatch(getList())
    },
    onAddList: (state, text) => {
      dispatch(addListCount(state, text))
    }
  }
}

const VisibleListTags = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListTag)

export default VisibleListTags