import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Cập nhật tin tức thị trường',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Cập nhật những tin tức mới nhất về thị trường tiền kỹ thuật số. Các thông tin ảnh hưởng tới thị trường.
      </>
    ),
  },
  {
    title: 'Chia sẻ kinh nghiệm cá nhân',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Chia sẻ những kinh nghiệm đầu tư trong thị trường từ những người đi trước.
      </>
    ),
  },
  {
    title: 'Hướng dẫn người mới',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Cung cấp những hướng dẫn đầu tư cho người mới gia nhập thị trường.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
