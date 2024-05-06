import java.awt.* ; 
import java.applet.* ; 

// <applet code = "AppletSkeleton" widht = 300 height = 50 > </applet>
class AppletSkeleton extends Applet      {
    String msg ; 

// initializing the variables using init() method 

    public void init() { 
        setBackground(Color.cyan) ; 
        setForeground(Color.red)  ;
        msg = "Inside init() --" ; 
    }
    // starting the applet
    public void start() {
        msg += "Inside start() --";
    }
    // display message on applet window 
    public void paint(Graphics g) { 
        msg += "Inside paint()." ; 
        g.drawString(msg, 10, 30);

    }
    public static void main(String args[]) { 
        AppletSkeleton a  = new AppletSkeleton() ; 
        a.init() ;
        a.start() ; 


    }
}
