// 北立交桥主题
import React from 'react';
import { Theme } from '../interface';
import { DefaultSoundNames, defaultSounds } from '../default';

// const soundUrls = import.meta.glob('./sounds/*.mp3', {
//     import: 'default',
//     eager: true,
// });

// const sounds = Object.entries(soundUrls).map(([key, value]) => ({
//     name: key.slice(9, -4),
//     src: value,
// })) as Theme<string>['sounds'];

const imagesUrls = import.meta.glob('./images/*.png', {
    import: 'default',
    eager: true,
});

const images = Object.entries(imagesUrls).map(([key, value]) => ({
    name: key.slice(9, -4),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: <img src={value} alt="" />,
}));

export const meumyTheme: Theme<DefaultSoundNames> = {
    name: '草原巴适',
    icons: images.map(({ name, content }) => ({
        name,
        content,
        clickSound: 'button-click',
        tripleSound: 'triple',
    })),
    sounds: defaultSounds,
};
