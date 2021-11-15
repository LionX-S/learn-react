import { PureComponent } from "react";
import store from "../store";
// connect 函数的作用就是将那些重复的redux代码封装起来，重复的一般是就是state和dispatch
export function connect (mapStateToProps,mapDispatchToProps){
  return function enhanceHOC(Wrapper) {
    return class extends PureComponent {
      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount() {
        this.unSubsrrible = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }
      componentWillUnmount(){
        this.unSubsrrible()
      }
      render() {
        return <Wrapper {...this.props}
                        {...mapStateToProps(store.getState())}
                        {...mapDispatchToProps(store.dispatch)}/>
      }
    }
  }
}