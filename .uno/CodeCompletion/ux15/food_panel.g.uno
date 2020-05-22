[Uno.Compiler.UxGenerated]
public partial class food_panel: Fuse.Controls.StackPanel
{
    global::Uno.UX.Property<Uno.UX.FileSource> temp_File_inst;
    global::Uno.UX.Property<string> temp1_Value_inst;
    global::Uno.UX.Property<string> temp2_Value_inst;
    static food_panel()
    {
    }
    [global::Uno.UX.UXConstructor]
    public food_panel()
    {
        InitializeUX();
    }
    void InitializeUX()
    {
        var temp = new global::Fuse.Controls.Image();
        temp_File_inst = new DagueTravel_FuseControlsImage_File_Property(temp, __selector0);
        var temp3 = new global::Fuse.Reactive.Data("food_img");
        var temp1 = new global::Fuse.Controls.Text();
        temp1_Value_inst = new DagueTravel_FuseControlsTextControl_Value_Property(temp1, __selector1);
        var temp4 = new global::Fuse.Reactive.Data("food_name");
        var temp2 = new global::Fuse.Controls.Text();
        temp2_Value_inst = new DagueTravel_FuseControlsTextControl_Value_Property(temp2, __selector1);
        var temp5 = new global::Fuse.Reactive.Data("food_info");
        var temp6 = new global::Fuse.Reactive.DataBinding(temp_File_inst, temp3, Fuse.Reactive.BindingMode.Default);
        var temp7 = new global::Fuse.Controls.Text();
        var temp8 = new global::Fuse.Reactive.DataBinding(temp1_Value_inst, temp4, Fuse.Reactive.BindingMode.Default);
        var temp9 = new global::Fuse.Reactive.DataBinding(temp2_Value_inst, temp5, Fuse.Reactive.BindingMode.Default);
        this.Width = new Uno.UX.Size(100f, Uno.UX.Unit.Percent);
        this.SourceLineNumber = 63;
        this.SourceFileName = "MainView.ux";
        temp.StretchMode = Fuse.Elements.StretchMode.Fill;
        temp.Height = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.MinHeight = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.MaxHeight = new Uno.UX.Size(15f, Uno.UX.Unit.Percent);
        temp.Margin = float4(0f, 10f, 0f, 10f);
        temp.Layer = Fuse.Layer.Layout;
        temp.SourceLineNumber = 64;
        temp.SourceFileName = "MainView.ux";
        temp.Bindings.Add(temp6);
        temp3.SourceLineNumber = 64;
        temp3.SourceFileName = "MainView.ux";
        temp7.Value = "❓";
        temp7.FontSize = 30f;
        temp7.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp7.Color = float4(0.1686275f, 0.227451f, 0.2588235f, 1f);
        temp7.SourceLineNumber = 65;
        temp7.SourceFileName = "MainView.ux";
        temp7.Font = global::MainView.FontAwesome;
        temp1.FontSize = 30f;
        temp1.TextAlignment = Fuse.Controls.TextAlignment.Left;
        temp1.TextColor = float4(0.8745098f, 0.2862745f, 0.2862745f, 1f);
        temp1.Margin = float4(0f, 0f, 0f, 10f);
        temp1.SourceLineNumber = 67;
        temp1.SourceFileName = "MainView.ux";
        temp1.Font = global::MainView.GMB;
        temp1.Bindings.Add(temp8);
        temp4.SourceLineNumber = 67;
        temp4.SourceFileName = "MainView.ux";
        temp2.TextWrapping = Fuse.Controls.TextWrapping.Wrap;
        temp2.LineSpacing = 3f;
        temp2.FontSize = 12f;
        temp2.TextAlignment = Fuse.Controls.TextAlignment.Center;
        temp2.TextColor = Fuse.Drawing.Colors.Black;
        temp2.Alignment = Fuse.Elements.Alignment.CenterLeft;
        temp2.SourceLineNumber = 68;
        temp2.SourceFileName = "MainView.ux";
        temp2.Font = global::MainView.GM;
        temp2.Bindings.Add(temp9);
        temp5.SourceLineNumber = 68;
        temp5.SourceFileName = "MainView.ux";
        this.Children.Add(temp);
        this.Children.Add(temp7);
        this.Children.Add(temp1);
        this.Children.Add(temp2);
    }
    static global::Uno.UX.Selector __selector0 = "File";
    static global::Uno.UX.Selector __selector1 = "Value";
}
