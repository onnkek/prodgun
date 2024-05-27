import type { Meta, StoryObj } from '@storybook/react';

import { ArticleDetails } from './ArticleDetails';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Themes } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Article, ArticleBlockType, ArticleType } from 'entities/Article/model/types/article';

const meta: Meta<typeof ArticleDetails> = {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
};

const article: Article = {
  "id": "1",
  "title": "Lorem ipsum info 2024",
  "subtitle": "",
  "img": "https://etzq49yfnmd.exactdn.com/wp-content/uploads/2022/03/cicero_gradient.png?strip=all&lossy=1&ssl=1",
  "views": 1022,
  "createdAt": "24.05.2024",
  "type": [ArticleType.IT],
  "blocks": [
    {
      "id": "1",
      "type": ArticleBlockType.TEXT,
      "title": "Do reprehenderit elit sit enim.",
      "paragraphs": [
        "Et in dolor nisi ad cupidatat cillum duis incididunt ea enim incididunt magna. Ipsum quis commodo enim anim aute exercitation eiusmod pariatur proident mollit. Consequat cillum elit ipsum nulla enim. Culpa ad veniam elit laborum amet eiusmod ex laborum exercitation voluptate ad. Commodo duis aliquip est velit et dolore culpa aliquip aliquip nostrud elit ipsum aliqua aute. Fugiat velit esse aliqua ipsum elit cupidatat ea id esse dolor exercitation incididunt aliquip magna.",
        "Commodo ut labore veniam reprehenderit culpa. Deserunt mollit cupidatat incididunt nisi dolore cupidatat quis. Adipisicing duis incididunt reprehenderit minim officia ex mollit officia dolor eu in. Lorem quis labore ipsum pariatur aute ea aliquip amet dolore ut enim. Nulla consectetur est nisi do minim dolore reprehenderit aute ex excepteur proident dolor elit Lorem. Do fugiat incididunt quis et minim dolore anim consequat incididunt aliquip.",
        "Elit duis ullamco commodo nisi sunt cillum amet do aliqua fugiat fugiat cupidatat. Ex elit cillum sunt nostrud nulla ut ad aute aliqua qui. Lorem id veniam laborum ipsum. Anim proident voluptate ipsum nostrud qui pariatur fugiat adipisicing ex proident deserunt incididunt magna. Aliquip culpa exercitation exercitation magna velit. Officia qui ex officia occaecat labore nulla eiusmod esse do proident sit aliquip."
      ]
    },
    {
      "id": "2",
      "type": ArticleBlockType.TEXT,
      "title": "Laborum ipsum deserunt irure esse.",
      "paragraphs": [
        "Aliqua exercitation amet ex non non enim excepteur ea voluptate ipsum ea exercitation culpa excepteur. Et non amet et incididunt quis sit culpa ipsum eu. Quis aliquip magna minim proident commodo incididunt. Minim duis et proident fugiat dolor occaecat aliqua. Sint ipsum tempor nisi aute elit esse velit ullamco et et ipsum amet.",
        "Non nisi eiusmod veniam consequat duis consectetur. Aute incididunt irure sunt dolore minim dolor proident pariatur consequat et eiusmod. Magna excepteur reprehenderit enim anim proident dolore proident commodo ipsum. Ut sunt non commodo id et veniam mollit aliquip et.",
        "Consectetur sit laborum aute nostrud magna culpa. Tempor aliquip id dolor cillum ex id. Deserunt voluptate velit eiusmod dolor eu. Eiusmod dolore elit ut aliquip id et consequat amet cupidatat velit amet magna mollit ipsum. Fugiat ex anim velit voluptate proident et. Tempor consequat esse quis cillum Lorem magna sit ipsum id labore enim. Aute magna in culpa consequat do magna occaecat sint ullamco laboris cupidatat dolor commodo Lorem."
      ]
    },
    {
      "id": "3",
      "type": ArticleBlockType.TEXT,
      "title": "Exercitation amet exercitation veniam cupidatat aliquip elit ad adipisicing esse eu eu sint dolore.",
      "paragraphs": [
        "Incididunt velit ea aute sit esse anim dolore mollit. Excepteur eiusmod anim sit deserunt dolore exercitation cillum sit laboris ex laborum ex. Voluptate incididunt cillum minim minim cillum incididunt. Qui voluptate et ex aliqua ut cupidatat pariatur dolor aliqua deserunt minim officia ex ex.",
        "Proident sunt ex tempor est eu anim nulla id veniam nisi ea. Consequat ut exercitation enim laborum Lorem ipsum reprehenderit dolore qui eiusmod commodo nisi aute laboris. Officia enim velit pariatur cillum exercitation irure est pariatur irure sit et ex nulla dolor. Esse sit quis esse cillum tempor sint deserunt culpa esse. Amet nisi cillum ipsum proident sit minim in nisi Lorem dolore occaecat laboris sunt.",
        "Qui amet in eiusmod laborum aliquip laborum. Ea ut anim do reprehenderit duis nulla ipsum irure adipisicing dolor qui commodo. Pariatur proident anim nostrud veniam aute Lorem qui nulla quis sit culpa exercitation aliquip commodo. Culpa exercitation sit sit pariatur pariatur sunt reprehenderit ullamco duis ullamco eu quis ullamco deserunt. Elit id et ea commodo incididunt id cupidatat voluptate ex elit labore et tempor nostrud. Pariatur incididunt velit consectetur reprehenderit est do adipisicing sint id excepteur culpa Lorem. Ex proident sint do sunt ullamco esse ut eiusmod culpa."
      ]
    },
    {
      "id": "4",
      "type": ArticleBlockType.CODE,
      "code": "export const Code = ({ className, children }: CodeProps) => {\n  return (\n    <pre className={classNames(cls.code, {}, [className])}>\n      <Button className={cls.copyBtn}>Copy</Button>\n      <code>\n        {children}\n      </code>\n    </pre>\n  );\n};"
    },
    {
      "id": "5",
      "type": ArticleBlockType.TEXT,
      "title": "Ipsum non cillum velit est dolore irure elit adipisicing dolor quis.",
      "paragraphs": [
        "Et fugiat anim adipisicing eiusmod. Adipisicing incididunt Lorem laborum occaecat cupidatat aute magna amet. Tempor fugiat nostrud sint nulla dolore veniam ea do consectetur tempor eu. Et consectetur est in elit pariatur. Aliquip aliqua ad anim voluptate amet amet quis mollit deserunt et velit minim. Ea aliqua deserunt nulla amet dolor sunt deserunt anim esse amet consectetur reprehenderit occaecat cupidatat. Elit minim commodo nostrud veniam laborum aliquip.",
        "Cillum cupidatat ea consectetur laborum velit amet nostrud Lorem occaecat sit dolor cillum fugiat eiusmod. Et dolor ut eu nisi cillum cupidatat duis occaecat non officia. Dolor labore ullamco ut enim aliquip elit dolore ad irure labore pariatur. Aliqua exercitation aliqua ea ut tempor dolor amet dolor. Exercitation quis elit ullamco id amet consequat irure. Laboris voluptate id cillum reprehenderit irure in anim cupidatat eu ut et exercitation.",
        "Laboris ex eu magna id ipsum amet nostrud nostrud reprehenderit ad nostrud eu elit. Laboris mollit amet velit culpa tempor pariatur eiusmod mollit aute fugiat velit. Commodo anim consectetur officia velit esse voluptate deserunt ex officia adipisicing."
      ]
    },
    {
      "id": "6",
      "type": ArticleBlockType.IMAGE,
      "src": "https://www.onlineprinters.co.uk/magazine/wp-content/uploads/2019/08/lorem-ipsum.jpg",
      "title": "Figure 1 - Test lorem"
    }
  ]
};

export default meta;
type Story = StoryObj<typeof ArticleDetails>;

export const Normal: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({
    articleDetails: {
      data: article
    }
  })],
};

export const Loading: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({
    articleDetails: {
      isLoading: true
    }
  })],
};

export const Error: Story = {
  args: {

  },
  decorators: [ThemeDecorator(Themes.LIGHT), StoreDecorator({
    articleDetails: {
      error: "Error"
    }
  })],
};


