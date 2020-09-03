<template>
  <v-app id="inspire">
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
            align="center"
            justify="center"
          >
            <v-card class="elevation-12">
              <v-toolbar flat>
                <v-toolbar-title class="text-center">เข้าสู่ระบบ</v-toolbar-title>
              </v-toolbar>

              <v-card-actions>
                <v-btn color="primary">เข้าสู่ระบบด้วย Facebook</v-btn>
              </v-card-actions>

              <v-card-text>
                <v-form>
                  <v-text-field
                    label="อีเมล"
                    name="email"
                    type="text"
                    outlined
                    single-line
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    label="รหัสผ่าน"
                    name="password"
                    type="password"
                    hint="At least 8 characters"
                    outlined
                    single-line
                  ></v-text-field>
                  
                </v-form>
              </v-card-text>

              <v-card-actions>
                <v-btn color="primary">เข้าสู่ระบบ</v-btn>
              </v-card-actions>

            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>