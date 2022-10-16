const e = React.createElement

class MarketplaceSidebar extends React.Component {
    constructor(props) {
      super(props);
      this.state = { visible: true };
    }
    render() {

        return e(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        );
    }
  }
  
  const domContainer = document.querySelector('#marketplace');
  ReactDOM.render(MarketplaceSidebar, domContainer);