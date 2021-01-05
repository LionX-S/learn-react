import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Home extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter:state.counter
})

const mapDispatchToProps = (disptach) => {
  return {
    decrement:function(){
      disptach()
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
