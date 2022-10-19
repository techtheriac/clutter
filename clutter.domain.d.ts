interface Dot {
  name: string;
  author: string;
  content: DotContent[];
}

type DotContent = Link | Image | Memo;

interface Link {
  name: string;
  url: string;
}

interface Image extends Link {
  format: string;
}

interface Memo extends Link {
  content: string;
}
