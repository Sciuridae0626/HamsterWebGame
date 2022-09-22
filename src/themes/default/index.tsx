import { Theme } from '../interface';
export type DefaultSoundNames = 'button-click' | 'triple';
import soundButtonClickUrl from './sounds/sound-button-click.mp3';
import soundTripleUrl from './sounds/sound-triple.mp3';
export const defaultSounds: Theme<DefaultSoundNames>['sounds'] = [
    {
        name: 'button-click',
        src: soundButtonClickUrl,
    },
    {
        name: 'triple',
        src: soundTripleUrl,
    },
];


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

export const defaultTheme: Theme<DefaultSoundNames> = {
    name: '鼠国',
    icons: images.map(({ name, content }) => ({
        name,
        content,
        clickSound: 'button-click',
        tripleSound: 'triple',
    })),
    sounds: defaultSounds,
};
