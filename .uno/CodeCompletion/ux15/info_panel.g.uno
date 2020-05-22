[Uno.Compiler.UxGenerated]
public partial class info_panel: Fuse.Controls.StackPanel
{
    global::Uno.UX.Property<Uno.UX.FileSource> temp_File_inst;
    global::Uno.UX.Property<string> temp1_Value_inst;
    global::Uno.UX.Property<string> temp2_Value_inst;
    internal global::Fuse.Reactive.EventBinding temp_eb1;
    static info_panel()
    {
    }
    [global::Uno.UX.UXConstructor]
    public info_panel()
    {
        InitializeUX();
    }
    void InitializeUX()
    {
        var temp = new global::Fuse.Controls.Image();
        temp_File_inst = new DagueTravel_FuseControlsImage_File_Property(temp, __selector0);
        var temp3 = new global::Fuse.Reactive.Data("img");
        var temp4 = new global::Fuse.Reactive.Data("map_click");
        var temp1 = new global::Fuse.Controls.Text();
        temp1_Value_inst = new DagueTravel_FuseControlsTextControl_Value_Property(temp1, __selector1);
        var temp5 = new global::Fuse.Reactive.Data("name");
        var temp2 = new global::Fuse.Controls.Text();
        temp2_Value_inst = new DagueTravel_FuseControlsTextControl_Value_Property(temp2, __selector1);
        var temp6 = new global::Fuse.Reactive.Data("info");
        var temp7 = new global::Fuse.Reactive.DataBinding(temp_File_inst, temp3, Fuse.Reactive.BindingMode.Default);
        var temp8 = new global::Fuse.Controls.StackPanel();
        var temp9 = new global::Fuse.Controls.Text();
        temp_eb1 = new global::Fuse.Reactive.EventBinding(temp4);
        var temp10 = new global::Fuse.Controls.Text();
        var temp11 = new global::Fuse.Reactive.DataBinding(temp1_Value_inst, temp5, Fuse.Reactive.BindingMode.Default);
        var temp12 = new global::Fuse.Reactive.DataBinding(temp2_Value_inst, temp6, Fuse.Reactive.BindingMode.Default);
        this.Width = new Uno.UX.Size(100f, Uno.UX.Unit.Percent);
        this.SourceLineNumber = 25;
        this.SourceFileName = "MainView.ux";
        temp.StretchMode = Fuse.Elements.StretchMode.Fill;
        temp.Height = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.MinHeight = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.MaxHeight = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.Margin = float4(0f, 10f, 0f, 10f);
        temp.Layer = Fuse.Layer.Layout;
        temp.SourceLineNumber = 26;
        temp.SourceFileName = "MainView.ux";
        temp.Bindings.Add(temp7);
        temp3.SourceLineNumber = 26;
        temp3.SourceFileName = "MainView.ux";
        temp8.Orientation = Fuse.Layouts.Orientation.Horizontal;
        temp8.ItemSpacing = 50f;
        temp8.Alignment = Fuse.Elements.Alignment.Center;
        temp8.Margin = float4(0f, 0f, 0f, 10f);
        temp8.SourceLineNumber = 27;
        temp8.SourceFileName = "MainView.ux";
        temp8.Children.Add(temp9);
        temp8.Children.Add(temp10);
        temp9.Value = "\uF279";
        temp9.FontSize = 30f;
        temp9.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp9.Color = float4(0.1686275f, 0.227451f, 0.2588235f, 1f);
        temp9.SourceLineNumber = 28;
        temp9.SourceFileName = "MainView.ux";
        global::Fuse.Gestures.Clicked.AddHandler(temp9, temp_eb1.OnEvent);
        temp9.Font = global::MainView.FontAwesome;
        temp9.Bindings.Add(temp_eb1);
        temp4.SourceLineNumber = 28;
        temp4.SourceFileName = "MainView.ux";
        temp10.Value = "❓";
        temp10.FontSize = 30f;
        temp10.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp10.Color = float4(0.1686275f, 0.227451f, 0.2588235f, 1f);
        temp10.SourceLineNumber = 29;
        temp10.SourceFileName = "MainView.ux";
        temp10.Font = global::MainView.FontAwesome;
        temp1.FontSize = 30f;
        temp1.TextAlignment = Fuse.Controls.TextAlignment.Left;
        temp1.Margin = float4(0f, 0f, 0f, 10f);
        temp1.SourceLineNumber = 31;
        temp1.SourceFileName = "MainView.ux";
        temp1.Font = global::MainView.GMB;
        temp1.Bindings.Add(temp11);
        temp5.SourceLineNumber = 31;
        temp5.SourceFileName = "MainView.ux";
        temp2.TextWrapping = Fuse.Controls.TextWrapping.Wrap;
        temp2.LineSpacing = 3f;
        temp2.FontSize = 12f;
        temp2.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp2.TextColor = Fuse.Drawing.Colors.Black;
        temp2.Alignment = Fuse.Elements.Alignment.CenterLeft;
        temp2.SourceLineNumber = 32;
        temp2.SourceFileName = "MainView.ux";
        temp2.Font = global::MainView.GM;
        temp2.Bindings.Add(temp12);
        temp6.SourceLineNumber = 32;
        temp6.SourceFileName = "MainView.ux";
        this.Children.Add(temp);
        this.Children.Add(temp8);
        this.Children.Add(temp1);
        this.Children.Add(temp2);
    }
    static global::Uno.UX.Selector __selector0 = "File";
    static global::Uno.UX.Selector __selector1 = "Value";
}
