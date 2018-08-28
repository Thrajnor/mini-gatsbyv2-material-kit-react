import React from 'react'
import Button from "components/CustomButtons/Button.jsx";


class IndexPage extends React.Component {
  state={
    text: 'hello',
  }
  changeTextHandler() {
    this.setState({text: 'hello world v2'})
  }
  render() {
    
    return (
      <>
        <Button
          color="danger"
          size="lg"
          href="#"
          // target="_blank"
          onClick={() => {
            this.changeTextHandler()
          }}
        >
          Watch video
        </Button>
        <p>{this.state.text}</p>
      </>
    )
  }
}

export default IndexPage
