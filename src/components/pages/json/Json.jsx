/* eslint-disable array-callback-return */
import React from 'react';
import styles from './json.scss';
import Input from '../../common/Input/input';
import Button from '../../common/button/button';
import Textarea from '../../common/textarea/textarea';
import getKeyPath from './getKeyPath';

class ISS extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      json: '',
      key: '',
      paths: [],
    };
  }

  onChangeHandler = e => {
    const { name } = e.target;
    const { value } = e.target;
    this.setState({ [name]: value });
  };

  getValidJSONObject = json => {
    let jsonObject = {};
    if (typeof json === 'string') {
      try {
        const jsonObj = JSON.parse(json);
        jsonObject = jsonObj;
      } catch (err) {
        return jsonObject;
      }
    } else if (typeof json === 'object') return json;
    return jsonObject;
  };

  isValidJson = json => {
    let isValid;
    if (typeof json === 'string') {
      try {
        JSON.parse(json);
        isValid = true;
      } catch (err) {
        isValid = false;
      }
    } else if (typeof json === 'object' && !Array.isArray(json)) {
      isValid = true;
    } else isValid = false;
    return isValid;
  };

  clickHandler = () => {
    const { json, key } = this.state;
    if (this.isValidJson(json) && key.length > 0) {
      const paths = getKeyPath(JSON.parse(json), key);
      this.setState({ paths });
    } else {
      // eslint-disable-next-line no-alert
      alert('Please enter valid JSON or key');
    }
  };

  reset = () => this.setState({ key: '', json: '', paths: [] });

  getValueFromPath = path => {
    const { json } = this.state;
    if (!this.isValidJson(json)) return '';
    let data = { ...JSON.parse(json) };
    if (path) {
      path.split('.').map(p => {
        if (p.includes('[')) {
          const subPath = p.split('[');
          data = data[subPath[0]];
          subPath.shift();
          subPath.map(sp => {
            data = data[sp.replace(']', '')];
          });
        } else {
          data = data[p];
        }
      });
      return data;
    }
    return '';
  };

  renderPaths = () => {
    const { paths, key } = this.state;
    if (paths && paths.length === 0) return null;
    return (
      <React.Fragment>
        <p>
          <b>{`Total ${paths.length} paths found for key "${key}"`}</b>
        </p>
        <ul>
          {paths.length > 0 &&
            paths.map((path, index) => (
              <li>{`${index + 1}. ${path}: ${this.getValueFromPath(path)}`}</li>
            ))}
        </ul>
      </React.Fragment>
    );
  };

  render() {
    const { json, key, paths } = this.state;

    return (
      <div className={styles.json}>
        <div
          className={styles.left}
          style={{
            width: paths.length === 0 ? '100%' : '50%',
            transition: 'width 1s',
          }}
        >
          <div className={styles.leftWrapper}>
            <h1>JSON Key Path finder</h1>
            <p>An utility to search path of specified key in the given JSON.</p>
            <div className={styles.form}>
              <Textarea
                value={json}
                name="json"
                id="json"
                onChange={this.onChangeHandler}
                placeholder="Paste JSON here"
              />
              <Input
                className={styles.textinput}
                value={key}
                name="key"
                id="key"
                onChange={this.onChangeHandler}
                placeholder="Enter key to search"
              />
              <Button
                // className={classnames(styles.button, styles.searchButton)}
                type="submit"
                onClick={this.clickHandler}
                theme="primary"
                className="mt-3 w-full"
              >
                Search
              </Button>

              <Button
                className="mt-3 w-full"
                // className={classnames(styles.button, styles.resetButton)}
                type="submit"
                theme="secondary"
                onClick={this.reset}
              >
                Reset
              </Button>
            </div>
          </div>
        </div>
        <div
          className={styles.jsonview}
          style={{
            width: paths.length === 0 ? '0%' : '50%',
            transition: 'width 1s',
          }}
        >
          {this.renderPaths()}
        </div>
      </div>
    );
  }
}

ISS.propTypes = {};

ISS.defaultProps = {};

export default ISS;
