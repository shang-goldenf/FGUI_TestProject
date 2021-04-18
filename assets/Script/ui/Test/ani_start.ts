/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class ani_start extends fgui.GComponent {

	public m_spine:fgui.GLoader3D;
	public static URL:string = "ui://mxqfrtqlp8v50";

	public static createInstance():ani_start {
		return <ani_start>(fgui.UIPackage.createObject("Test", "ani_start"));
	}

	protected onConstruct():void {
		this.m_spine = <fgui.GLoader3D>(this.getChild("spine"));
	}
}