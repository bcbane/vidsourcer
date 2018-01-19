import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome'

const headerBarContentCSS = {
  height: '100px',
  width: 'calc(100% - 40px)',
  padding: '0px 20px 0px 20px',
  background: '#00767F',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const headerBarLowerCSS = {
  height: '15px',
  width: '100%',
  background: '#F19635',
};

const headerBarText = {
  fontSize: '30px',
  color: '#C7A537',
};

const headerLogoText = {
  display: 'flex',
  alignItems:'center',
  justifyContent: 'space-between',
  fontSize: '40px',
  fontFamily: 'News Cycle, sans-serif',
  fontWeight: '700',
  color: '#C9A537',
};

const headerLogoTextIcon = {
  padding: '0px 5px 0px 5px',
  color: '#C9A537',
};

const headerMenuIcon = {
  fontSize: '45px',
  color: '#C9A537',
};

class HeaderBar extends Component {
  render() {
    return (
      <div>
        <div
          className="headerBarContent"
          style={headerBarContentCSS}
        >
          <div
            style={headerLogoText}
          >
            <span>Vid</span>
            <div
              style={headerLogoTextIcon}
            >
              <FontAwesome
                className='fa-play-circle'
              />
            </div>
            <span>Sourcer</span>
          </div>
          <div
            style={headerMenuIcon}
          >
            <FontAwesome
              className='fa fa-bars'
            />
          </div>
        </div>
        <div
          className="headerBarLower"
          style={headerBarLowerCSS}
        >
        </div>
      </div>
    );
  }
}

export default HeaderBar;
