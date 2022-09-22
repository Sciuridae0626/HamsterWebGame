// 北立交桥主题
import bgm from './sounds/【月兮】勾指起誓.mp3';
import soundClickUrl from '../sound-button-click.mp3';
import soundTripleUrl from './sounds/【无前Namae】这个好诶.mp3';
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

export const beilijiaoqiaoTheme: Theme<SoundNames> = {
    name: '北立交桥',
    bgm,
    icons: images.map(({ name, content }) => ({
        name,
        content,
        clickSound: 'soundClick',
        tripleSound: 'soundTriple',
    })),
    sounds,
};