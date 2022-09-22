// 草原巴适主题
import bgm from './sounds/【咩栗x呜米】创世烟火.mp3';
import soundClickUrl from '../sound-button-click.mp3';
import soundTripleUrl from './sounds/【咩栗】沃日.mp3';
import { Theme } from '../interface';

type SoundNames =
    | 'soundClick'
    | 'soundTriple';

const sounds: { name: SoundNames; src: string }[] = [
    { name: 'soundClick', src: soundClickUrl },
    { name: 'soundTriple', src: soundTripleUrl },
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

export const meumyTheme: Theme<SoundNames> = {
    name: '草原巴适',
    bgm,
    icons: images.map(({ name, content }) => ({
        name,
        content,
        clickSound: 'soundClick',
        tripleSound: 'soundTriple',
    })),
    sounds,
};