import ani_start from "./ui/Test/ani_start";
import TestBinder from "./ui/Test/TestBinder";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello GOGOGOGO';

    onLoad() {
        fgui.GRoot.create();
    }

    start () {
        // init logic
        this.label.string = this.text;
        fgui.UIPackage.loadPackage("Test", this.onUILoaded.bind(this));
    }

    onUILoaded(): void {
        TestBinder.bindAll();
        let view = ani_start.createInstance();
        console.warn("view : ", view);
        console.warn("1.view.m_spine : ", view.m_spine);
        fgui.GRoot.inst.addChild(view);
        view.m_spine.playing = false;
        view.m_spine.playing = true;
        setTimeout(()=>{
            view.m_spine.playing = false;
            view.m_spine.playing = true;
            console.warn("2.view.m_spine : ", view.m_spine);
        }, 4000, )
        setTimeout(()=>{
            view.m_spine.playing = false;
            view.m_spine.playing = true;
            console.warn("3.view.m_spine : ", view.m_spine);
        }, 8000, )
    }
}
