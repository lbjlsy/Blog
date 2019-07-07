import React from "react";
import { observer, inject } from "mobx-react";
import { Link } from "react-router-dom";
import styles from './tags.module.less';
import { routePath } from "@utils/constants";

@inject("articleStore")
@observer
class Tag extends React.Component {
  state = {};
  componentDidMount() {
    const { articleStore } = this.props
    articleStore.getArticleTags()
  }

  render() {
    const { articleStore } = this.props;
    return (
      <section>
        <h1>
          <span className={styles.tags_text}>Tags</span>
        </h1>
        <ul className={styles.tags}>
          {articleStore.tags.map((item, index) => (
            <li key={index}>
              <Link to={`${routePath.tag}${item}`}>{item}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Tag;
