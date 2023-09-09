import React from 'react'

import styles from './_card.module.scss'

export const Card = ({
    children,
    title,
    footer,
    className = '',
    titleTag = 'p',
    tag = 'div',
    ...props
}) => {
    const TitleTag = titleTag
    const Tag = tag
    return (
        <Tag className={`${styles.card} ${className}`} {...props}>
            <div className={styles.card__title}>
                <TitleTag
                    id={props['aria-labelledby']}
                    className={'text-s wgh-500'}
                >
                    {title}
                </TitleTag>
            </div>
            <div className={styles.card__body}>{children}</div>
            <div className={styles.card__footer}>{footer}</div>
        </Tag>
    )
}
