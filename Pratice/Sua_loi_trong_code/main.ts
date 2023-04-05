function main() {
    let message: string;
    let total: number = 100;
    // let isProduction = true;
    let isProduction: boolean = true;
    // let prices: Array<number> = [120, 88, "60"];
    let prices: Array<number> = [120, 88, 60];
    let languages: string[] = ['vi', 'en-us'];
    // let now = new Date();
    let now: Date = new Date();
    let unknown: any;

    enum Direction {
        UP,
        DOWN,
        LEFT,
        RIGHT
    };

    function log(msg: string): void {
        console.log(msg)
    }

    interface IPost {
        id: string;
        title: string;
        body?: string;
    }

    isProduction = false;
    unknown = Direction.UP;
    unknown = 'changed';
    // const post: IPost = {};
    const post: IPost = {id:'' , title: '', body:''};
    // message = 50;
    message = '50';

    function getPost(postId: string): IPost {
        // do something to retrieve post
        return {
            id: postId,
            title: 'Post Title',
            body: 'Post Body',
            // extra: 'data'
        } as IPost;
    }
}


// function main() {
// }

main();