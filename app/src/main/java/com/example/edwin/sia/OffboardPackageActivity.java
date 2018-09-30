package com.example.edwin.sia;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;

public class OffboardPackageActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_offboard_package);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        findViewById(R.id.choice).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Log.d("testing", "click");
                findViewById(R.id.buttonChangeFlight).setBackgroundColor(getResources().getColor(R.color.colorPrimary));
                findViewById(R.id.imageViewCheck1).setBackground(getResources().getDrawable(R.drawable.checked));
            }
        });


        findViewById(R.id.buttonChangeFlight).setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                startActivity(new Intent(OffboardPackageActivity.this, OffboardConfirmActivity.class));
            }
        });
    }

}
