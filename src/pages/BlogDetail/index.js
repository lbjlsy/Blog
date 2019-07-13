import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Helmet from 'react-helmet';
import cs from 'classnames';
import _ from 'lodash';

import tocbot from 'tocbot';
import hljs from 'highlight.js';
import baguetteBox from 'baguettebox.js';
import { TwitterIcon, TwitterShareButton } from 'react-share';

import 'baguettebox.js/dist/baguetteBox.min.css';
import 'tocbot/dist/tocbot.css';
import './index.less';

// import Like from '@components/Post/Like/Like';
import Skeleton from '@/components/Skeletons/ArticleDetail';

import { formatJSONDate } from '@/utils/tools';
// import routePath from '@constants/routePath';

@inject('articleStore')
@observer
class BlogDetail extends React.Component {

  async componentDidMount() {
    const { articleStore } = this.props;
    await articleStore.getArticleDetail();
    this.tocbotInit();
    this.fixToc();
    this.hljsInit();
    this.addLineNumbers();
    this.deleteEmptyTag();
    this.showImageAlt();
    this.wrapImg();
    this.initBaguetteBox();
    // await articleStore.getIp();
    // articleStore.getLikes(curId, articleStore.curIp);
    // articleStore.increasePV(curId);
    // initLivere();
  }

  wrapImg = () => {
    const imgDom = document.querySelectorAll('.article_content img');
    const imgWrapper = document.querySelectorAll('.img-group');
    for (let i = 0, len = imgDom.length; i < len; i += 1) {
      imgWrapper[i].innerHTML = `<a href='${
        imgDom[i].src
      }' data-caption='${imgDom[i].alt}'>${
        imgWrapper[i].innerHTML
      }</a>`;
    }
  };

  initBaguetteBox() {
    baguetteBox.run('.article_content');
  }

  tocbotInit() {
    const headers = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    for (let i = 0, len = headers.length; i < len; i += 1) {
      headers[i].id = `header-${i}`;
    }
    tocbot.init({
      tocSelector: '.menu',
      contentSelector: '.article_content',
      headingSelector: 'h2, h3, h4, h5, h6',
    });
  }

  fixToc() {
    const menu = document.querySelector('.menu');

    window.addEventListener(
      'scroll',
      _.throttle(() => {
        const tops =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (tops < 440) {
          menu.style.top = `${512 - tops}px`;
        } else {
          menu.style.top = '4rem';
        }
      }, 10),
    );
  }

  showImageAlt() {
    const imgList = [];
    const imgTag = document.querySelectorAll('img');
    for (let i = 0, l = imgTag.length; i < l; i += 1) {
      imgList.push(imgTag[i].alt);
      imgTag[i].parentNode.classList.add('img-group');
      imgTag[i].parentNode.insertAdjacentHTML(
        'beforeend',
        `<span class='img-info'>${imgList[i]}</span>`,
      );
    }
  }

  addLineNumbers() {
    const hljsDOM = document.querySelectorAll('.hljs');
    for (let i = 0, l = hljsDOM.length; i < l; i += 1) {
      hljsDOM[
        i
      ].innerHTML = `<ol class="rounded-list"><li class="hljs-ln-line">${hljsDOM[
        i
      ].innerHTML.replace(
        /\n/g,
        '\n</li><li class="hljs-ln-line">',
      )}\n</li></ol>`;
    }
  }

  hljsInit() {
    const codeBlock = document.querySelectorAll('pre code');
    for (let i = 0, l = codeBlock.length; i < l; i += 1) {
      hljs.highlightBlock(codeBlock[i]);
    }
  }

  deleteEmptyTag() {
    const ul = document.getElementsByClassName('rounded-list');
    for (let i = 0, l = ul.length; i < l; i += 1) {
      if (ul[i].lastChild.innerHTML.trim() === '') {
        ul[i].removeChild(ul[i].lastChild);
      }
    }
  }

  render() {
    const { articleStore } = this.props;
    const isWebp = window.localStorage.getItem('isWebp') === 'true';
    return (
      <main className='article_detail_wrapper'>
        <Helmet>
          <title>{articleStore.articleDetail.title}</title>
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:site' content='@YanceyOfficial' />
          <meta name='twitter:creator' content='@YanceyOfficial' />
          <meta
            name='og:title'
            content={articleStore.articleDetail.title}
          />
          <meta
            name='og:description'
            content={articleStore.articleDetail.summary}
          />
          <meta
            name='og:image'
            content={`https:${articleStore.articleDetail.header_cover}`}
          />
          <meta name='og:url' content={location.href} />
        </Helmet>

        <section
          className='article_meta_wrapper'
          style={{
            backgroundImage: `url(${
              isWebp
                ? `${articleStore.articleDetail.header_cover}${webpSuffix}`
                : articleStore.articleDetail.header_cover
            })`,
          }}
        />

        {articleStore.isDetailLoading ? (
          <Skeleton />
        ) : (
          <>
            <div className='content_wrapper'>
              <h1 className='title'>{articleStore.articleDetail.title}</h1>
              <span
                className='publish_date'
                data-modify={`最后修改时间: ${formatJSONDate(
                  articleStore.articleDetail.last_modified_date,
                )}`}
              >
                发布时间:{' '}
                {formatJSONDate(articleStore.articleDetail.publish_date)}
              </span>
              <span className='page_view'>
                {/* {articleStore.articleDetail.pv_count} 阅读 */}
              </span>
              <ul className='tags_list'>
                {/* {articleStore.articleDetail.tags.map(
                  (item, index) => (
                    <li key={index}>
                      <Link to={`/t/${item}`}>{item}</Link>
                    </li>
                  ),
                )} */}
              </ul>
              {/* summary */}
              <blockquote className='summary'>
                {articleStore.articleDetail.summary}
              </blockquote>
              {/* content */}
              <section
                className='article_content'
                dangerouslySetInnerHTML={{
                  __html: articleStore.articleDetail.content,
                }}
              />
              {/* menu */}
              <aside className='menu' />
            </div>
            <div className='attachment_wrapper'>
              {/* copyright share like */}
              {/* <section className='copyright_share_wrapper'>
                <a href={byNcSa} target='_blank' rel='noopener noreferrer'>
                  Attribution-NonCommercial-ShareAlike 4.0 International (CC
                  BY-NC-SA 4.0)
                </a>
                share To Twitter Btn
                <div className='share_btn'>
                  <TwitterShareButton
                    title={articleStore.articleDetail.title}
                    url={window.location.href}
                    via='YanceyOfficial'
                    className='Demo__some-network__share-button'
                  >
                    <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <Like />
                </div>
              </section> */}
              {/* Previous and Next Articles Link */}
              <section className='prev_next_wrapper'>
                {/* {JSON.stringify(articleStore.detail.previousArticle) ===
                '{}' ? null : (
                  <Link
                    className='prev_next'
                    to={`/article/${
                      articleStore.detail.previousArticle.id
                    }`}
                  >
                    <div
                      className={cs('prev_next_container', 'prev')}
                      style={{
                        backgroundImage: `url(${
                          isWebp
                            ? `${
                                articleStore.detail.previousArticle
                                  .header_cover
                              }${webpSuffix}`
                            : articleStore.detail.previousArticle.header_cover
                        })`,
                      }}
                    >
                      <div className={cs('prev_next_meta', 'prev_meta')}>
                        <p className='directive'>PREVIOUS POST</p>
                        <p className='title'>
                          {articleStore.detail.previousArticle.title}
                        </p>
                      </div>
                      <div className='overlay' />
                    </div>
                  </Link>
                )} */}
                {/* {JSON.stringify(articleStore.detail.nextArticle) ===
                '{}' ? null : (
                  <Link
                    className='prev_next'
                    to={`/article/${
                      articleStore.detail.nextArticle.id
                    }`}
                  >
                    <div
                      className={cs('prev_next_container', 'next')}
                      style={{
                        backgroundImage: `url(${
                          isWebp
                            ? `${
                                articleStore.detail.nextArticle.header_cover
                              }${webpSuffix}`
                            : articleStore.detail.nextArticle.header_cover
                        })`,
                      }}
                    >
                      <div className={cs('prev_next_meta', 'next_meta')}>
                        <p className='directive'>NEXT POST</p>
                        <p className='title'>
                          {articleStore.detail.nextArticle.title}
                        </p>
                      </div>
                      <div className='overlay' />
                    </div>
                  </Link>
                )} */}
              </section>
              {/* Livere Comment */}
              <section className='comment_wrapper'>
                {/* <p className='comment_title'>Comments</p> */}
                {/* <div id='lv-container' data-id='city' data-uid={livere} /> */}
              </section>
            </div>
          </>
        )}
      </main>
    );
  }
}

export default BlogDetail;