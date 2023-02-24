import React, { Component } from 'react';
import { render } from 'react-dom';
import ReadMore from './ReadMore';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
    };
  }

  componentDidMount() {
    console.log(
      'mounted width - ',
      window.getComputedStyle(this.wrapper).getPropertyValue('width')
    );
  }

  getWrapperWidth() {
    if (this.wrapper) {
      console.log(
        'get wrapper width',
        window.getComputedStyle(this.wrapper).getPropertyValue('width')
      );
    } else {
      console.log('get wrapper - no wrapper');
    }
  }

  render() {
    return (
      <div style={{ width: '340px' }} ref={(node) => (this.wrapper = node)}>
        {console.log('show: ', this.getWrapperWidth)}
        <ReadMore
          text="Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser of tickets/festival passes is not present in your face. This is all.Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser of tickets/festival passes is not present in your face. This is all.Each valid ticket/festival pass guarantees entry to the event on the date and time specified on the ticket/festival pass (subject to venue legal capacity). If the original purchaser of tickets/festival passes is not present in your face. This is all."
          numberOfLines={9}
          lineHeight={1.4}
          showLessButton={true}
          onContentChange={this.getWrapperWidth}
        />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
