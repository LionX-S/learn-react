import React, { PureComponent } from "react";

// 依赖store
// 可以通过context将store传递进来，这样这个就不依赖store了
export function connect(mapStateToProps,mapDispatchToProps){
  return function enhanceHOC(WrappedComponent) {
    return class extends PureComponent{
      constructor(props){
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }
      componentDidMount(){
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount(){
        this.unsubscribe();
      }
      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(store.getState())}
                                 {...mapDispatchToProps(store.dispatch)}/>
      } 
    }
  }
}