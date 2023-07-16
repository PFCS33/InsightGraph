<template>
  <div class="container" ref="1">
    <!-- <transition name="slide"> -->
    <el-menu default-active="1" class="edit-panel" :collapse="!editMode">
      <el-sub-menu index="1">
        <template #title>
          <el-icon><operation /></el-icon>
          <span>Base Config</span>
        </template>
        <el-form
          label-position="top"
          label-width="100px"
          style="max-width: 460px"
          @submit.prevent
          size="small"
          class="form"
          novalidate
        >
          <el-form-item class="form-item-control">
            <div class="form-btn-control">
              <BaseButton @click="simRestart" class="config-btn btn"
                >Default</BaseButton
              >
              <BaseButton @click="simStop" class="config-btn btn"
                >Stop</BaseButton
              >
            </div>
          </el-form-item>
          <el-form-item label="Alpha" class="form-item-control">
            <el-input
              type="number"
              id="alpha"
              v-model="alpha"
              step="0.01"
              min="0"
              max="1"
              @blur="handleBaseBlur('alpha')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaMin" class="form-item-control">
            <el-input
              type="number"
              id="alphaMin"
              v-model="alphaMin"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaMin')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaDecay" class="form-item-control">
            <el-input
              type="number"
              id="alphaDecay"
              v-model="alphaDecay"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaDecay')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="AlphaTarget" class="form-item-control">
            <el-input
              type="number"
              id="alphaTarget"
              v-model="alphaTarget"
              step="0.001"
              min="0"
              max="1"
              @blur="handleBaseBlur('alphaTarget')"
              class="input-control"
            />
          </el-form-item>
          <el-form-item label="VelocityDecay" class="form-item-control">
            <el-input
              type="number"
              id="velocityDecay"
              v-model="velocityDecay"
              step="0.01"
              min="0"
              max="1"
              @blur="handleBaseBlur('velocityDecay')"
              class="input-control"
            />
          </el-form-item>
        </el-form>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><setting /></el-icon>
          <span>Force Config</span>
        </template>
        <el-sub-menu index="2-1">
          <template #title>
            <el-icon><Location /></el-icon>
            <span>Center Force</span>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            style="max-width: 460px"
            @submit.prevent
            size="small"
            class="form"
            novalidate
          >
            <el-form-item>
              <div class="btn-label" style="width: 100%">
                <span>Set</span>
                <el-switch
                  v-model="setCenter"
                  size="default"
                  :disabled="false"
                />
              </div>
            </el-form-item>
            <el-form-item>
              <div class="form-btn-control">
                <BaseButton
                  @click="forceDefaultSet('center')"
                  class="config-btn btn"
                  :disabled="!setCenter"
                  >Default</BaseButton
                >
              </div>
            </el-form-item>
            <el-form-item label="CenterX" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerX"
                v-model.number="centerX"
                step="1"
                min="0"
                :max="defaultForceConfig.center.X * 2"
                class="input-control"
                @blur="handleCenterBlur('X')"
              />
              <el-slider
                :disabled="!setCenter"
                v-model="centerX"
                :min="0"
                :max="defaultForceConfig.center.X * 2"
              />
            </el-form-item>
            <el-form-item label="CenterY" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerY"
                v-model.number="centerY"
                step="1"
                min="0"
                :max="defaultForceConfig.center.Y * 2"
                class="input-control"
                @blur="handleCenterBlur('Y')"
              />
              <el-slider
                :disabled="!setCenter"
                v-model="centerY"
                :min="0"
                :max="defaultForceConfig.center.Y * 2"
              />
            </el-form-item>
            <el-form-item label="CenterStrength" class="form-item-control">
              <el-input
                :disabled="!setCenter"
                type="number"
                id="centerStrength"
                v-model.number="centerStrength"
                step="0.1"
                min="-1"
                class="input-control"
                @blur="handleCenterBlur('Strength')"
              />
            </el-form-item>
          </el-form>
        </el-sub-menu>
        <el-sub-menu index="2-2">
          <template #title>
            <el-icon><Location /></el-icon>
            <span> Position Force </span>
          </template>

          <el-collapse style="width: 90%; margin-left: auto">
            <el-collapse-item name="1">
              <template #title>
                <div class="btn-label">
                  <span> ForceX </span>
                  <el-switch v-model="setX" size="default" @click.stop />
                </div>
              </template>
              <el-form
                label-position="top"
                label-width="100px"
                style="max-width: 460px; padding-left: 0"
                @submit.prevent
                size="small"
                class="form"
                novalidate
                :disabled="!setX"
              >
                <el-form-item label="X *" class="form-item-control">
                  <el-tabs v-model="forceXMode" @tab-click="handleTabClick">
                    <el-tab-pane
                      label="Number"
                      name="number"
                      style="margin-bottom: 10px"
                    >
                      <el-input
                        type="number"
                        id="xX"
                        v-model.number="xX"
                        step="1"
                        min="0"
                        class="input-control"
                      />
                      <el-slider
                        v-model="xX"
                        :min="0"
                        :max="defaultForceConfig.x.X * 2"
                      />
                    </el-tab-pane>
                    <el-tab-pane label="Aggregate" name="aggregate">
                    </el-tab-pane>
                  </el-tabs>
                </el-form-item>
                <el-form-item label="Strength *" class="form-item-control">
                  <el-input
                    type="number"
                    id="xStrength"
                    v-model.number="xStrength"
                    step="0.1"
                    min="-1"
                    class="input-control"
                  />
                </el-form-item>
              </el-form>
            </el-collapse-item>
            <el-collapse-item name="2">
              <template #title>
                <div class="btn-label">
                  <span> ForceY </span>
                  <el-switch v-model="setY" size="default" />
                </div>
              </template>
              <el-form
                label-position="top"
                label-width="100px"
                style="max-width: 460px; padding-left: 0"
                @submit.prevent
                size="small"
                class="form"
                novalidate
                :disabled="!setY"
              >
                <el-form-item label="Y *" class="form-item-control">
                  <el-input
                    type="number"
                    id="yY"
                    v-model.number="yY"
                    step="1"
                    min="0"
                    class="input-control"
                  />
                  <el-slider
                    v-model="yY"
                    :min="0"
                    :max="defaultForceConfig.y.Y * 2"
                  />
                </el-form-item>
                <el-form-item label="Strength *" class="form-item-control">
                  <el-input
                    type="number"
                    id="yStrength"
                    v-model.number="yStrength"
                    step="0.1"
                    min="-1"
                    class="input-control"
                  />
                </el-form-item>
              </el-form>
            </el-collapse-item>
            <el-collapse-item name="3">
              <template #title>
                <div class="btn-label">
                  <span> ForceR </span>
                  <el-switch v-model="setRadicial" size="default" />
                </div>
              </template>
              <el-form
                label-position="top"
                label-width="100px"
                style="max-width: 460px; padding-left: 0"
                @submit.prevent
                size="small"
                class="form"
                novalidate
                :disabled="!setRadicial"
              >
                <el-form-item label="X" class="form-item-control">
                  <el-input
                    type="number"
                    id="radialX"
                    v-model.number="radialX"
                    step="1"
                    min="0"
                    class="input-control"
                  />
                  <el-slider
                    v-model="radialX"
                    :min="0"
                    :max="defaultForceConfig.radial.X * 2"
                  />
                </el-form-item>
                <el-form-item label="Y" class="form-item-control">
                  <el-input
                    type="number"
                    id="radialY"
                    v-model.number="radialY"
                    step="1"
                    min="0"
                    class="input-control"
                  />
                  <el-slider
                    v-model="radialY"
                    :min="0"
                    :max="defaultForceConfig.radial.Y * 2"
                  />
                </el-form-item>
                <el-form-item label="R *" class="form-item-control">
                  <el-input
                    type="number"
                    id="radialR"
                    v-model.number="radialR"
                    step="1"
                    min="0"
                    class="input-control"
                  />
                  <el-slider v-model="radialR" :min="0" :max="1000" />
                </el-form-item>
                <el-form-item label="Strength *" class="form-item-control">
                  <el-input
                    type="number"
                    id="radialStrength"
                    v-model.number="radialStrength"
                    step="0.1"
                    min="-1"
                    class="input-control"
                  />
                </el-form-item>
              </el-form>
            </el-collapse-item>
          </el-collapse>
        </el-sub-menu>
        <el-sub-menu index="2-3">
          <template #title>
            <el-icon><IconMenu /></el-icon>
            <span> NBody Force </span>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            style="max-width: 460px"
            @submit.prevent
            size="small"
            class="form"
            novalidate
          >
            <el-form-item>
              <div class="btn-label" style="width: 100%">
                <span>Set</span>
                <el-switch v-model="setManyBody" size="default" />
              </div>
            </el-form-item>
            <el-form-item label="Strength *" class="form-item-control">
              <el-input
                :disabled="!setManyBody"
                type="number"
                id="manyBodyStrength"
                v-model.number="manyBodyStrength"
                step="1"
                min="-500"
                max="500"
                class="input-control"
              />
              <el-slider
                :disabled="!setManyBody"
                v-model="manyBodyStrength"
                :min="-500"
                :max="500"
              />
            </el-form-item>
            <el-form-item label="Theta" class="form-item-control">
              <el-input
                type="number"
                id="manyBodyTheta"
                v-model.number="manyBodyTheta"
                step="0.1"
                min="0"
                class="input-control"
              />
            </el-form-item>
            <el-form-item label="DistanceMin" class="form-item-control">
              <el-input
                :disabled="!setManyBody"
                type="number"
                id="distanceMin"
                v-model.number="manyBodyDistanceMin"
                step="0.1"
                min="0"
                max="1000"
                class="input-control"
              />
              <el-slider
                :disabled="!setManyBody"
                v-model="manyBodyDistanceMin"
                :step="0.1"
                :min="0"
                :max="1000"
              />
            </el-form-item>
            <el-form-item label="DistanceMax" class="form-item-control">
              <el-input
                :disabled="!setManyBody"
                type="number"
                id="manyBodyDistanceMax"
                v-model.number="manyBodyDistanceMax"
                step="0.1"
                min="0"
                max="5000"
                class="input-control"
              />
              <el-slider
                :disabled="!setManyBody"
                v-model="manyBodyDistanceMax"
                :step="0.1"
                :min="0"
                :max="5000"
              />
            </el-form-item>
          </el-form>
        </el-sub-menu>
        <el-sub-menu index="2-4">
          <template #title>
            <el-icon><Warning /></el-icon>
            <span> Collide Force </span>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            style="max-width: 460px"
            @submit.prevent
            size="small"
            class="form"
            novalidate
          >
            <el-form-item>
              <div class="btn-label" style="width: 100%">
                <span>Set</span>
                <el-switch v-model="setCollide" size="default" />
              </div>
            </el-form-item>
            <el-form-item label="Radius *"> </el-form-item>
            <el-form-item label="Strength" class="form-item-control">
              <el-input
                :disabled="!setCollide"
                type="number"
                id="collideStrength"
                v-model.number="collideStrength"
                step="0.1"
                min="0"
                max="1"
                class="input-control"
              />
            </el-form-item>
            <el-form-item label="Iterations" class="form-item-control">
              <el-input
                :disabled="!setCollide"
                type="number"
                id="collideIterations"
                v-model.number="collideIterations"
                step="1"
                min="0"
                max="500"
                class="input-control"
              />
              <el-slider
                :disabled="!setCollide"
                v-model="collideIterations"
                :min="0"
                :max="500"
              />
            </el-form-item>
          </el-form>
        </el-sub-menu>
        <el-sub-menu index="2-5">
          <template #title>
            <el-icon><Share /></el-icon>
            <span> Link Force </span>
          </template>
          <el-form
            label-position="top"
            label-width="100px"
            style="max-width: 460px"
            @submit.prevent
            size="small"
            class="form"
            novalidate
          >
            <el-form-item>
              <div class="btn-label" style="width: 100%">
                <span>Set</span>
                <el-switch v-model="setLink" size="default" />
              </div>
            </el-form-item>
            <el-form-item label="Distance *" class="form-item-control">
              <el-input
                :disabled="!setLink"
                type="number"
                id="linkDistance"
                v-model.number="linkDistance"
                step="1"
                min="0"
                max="300"
                class="input-control"
              />
              <el-slider
                :disabled="!setLink"
                v-model="linkDistance"
                :min="0"
                :max="300"
              />
            </el-form-item>
            <el-form-item label="Strength *" class="form-item-control">
              <el-input
                :disabled="!setLink"
                type="number"
                id="linkStrength"
                v-model.number="linkStrength"
                step="0.1"
                min="0"
                max="1"
                class="input-control"
              />
            </el-form-item>
            <el-form-item label="Iterations" class="form-item-control">
              <el-input
                :disabled="!setLink"
                type="number"
                id="linkIterations"
                v-model.number="linkIterations"
                step="1"
                min="0"
                max="500"
                class="input-control"
              />
              <el-slider
                :disabled="!setLink"
                v-model="linkIterations"
                :min="0"
                :max="500"
              />
            </el-form-item>
          </el-form>
        </el-sub-menu>
      </el-sub-menu>
    </el-menu>

    <BaseButton
      @click="toggleEditMode"
      class="edit-btn btn"
      :class="{ 'active-btn': editMode }"
    >
      <el-icon size="large" class="icon">
        <Tools />
      </el-icon>
    </BaseButton>
    <BaseCard :inset="true" class="ticks-card"> {{ ticks }} </BaseCard>
    <div id="svg-container"></div>
  </div>
</template>

<script>
import {
  Tools,
  Share,
  Menu as IconMenu,
  Location,
  Setting,
  Operation,
  Warning,
} from "@element-plus/icons-vue";

export default {
  components: {
    Tools,
    Location,
    IconMenu,
    Setting,
    Share,
    Operation,
    Warning,
  },
  data() {
    return {
      width: null,
      height: null,
      circleR: 5,
      circleFocusR: 20,
      vegaLiteHeight: 100,
      vegaLiteWidth: 100,
      diagonal: null,
      axisOffsetX: 39,
      axisOffsetY: 36,
      showIndex: new Map(),

      simulation: null,
      ticks: 0,
      editMode: false,

      // element plus
      forceXMode: "number",

      // Base Config
      alpha: 1,
      alphaMin: 0.001,
      alphaDecay: 1 - Math.pow(0.001, 1 / 300),
      alphaTarget: 0,
      velocityDecay: 0.4,
      defaultBaseConfig: {
        alpha: 1,
        alphaMin: 0.001,
        alphaDecay: 1 - Math.pow(0.001, 1 / 300),
        alphaTarget: 0,
        velocityDecay: 0.4,
      },

      // Force Config
      // center config
      setCenter: true,
      centerX: null,
      centerY: null,
      centerStrength: 1,
      // position config
      setX: false,
      xX: null,
      xStrength: 0.1,

      setY: false,
      yY: null,
      yStrength: 0.1,

      setRadicial: false,
      radialX: null,
      radialY: null,
      radialR: 100,
      radialStrength: 0.1,
      // nbody config
      setManyBody: true,
      manyBodyStrength: -30,
      manyBodyTheta: 0.9,
      manyBodyDistanceMin: 1,
      manyBodyDistanceMax: 5000,

      // link config
      setLink: true,
      linkDistance: 30,
      linkStrength: 0.1,
      linkIterations: 1,

      // collide config
      setCollide: false,
      collideRadius: null,
      collideStrength: 1,
      collideIterations: 1,

      defaultForceConfig: {
        center: {
          X: null,
          Y: null,
          Strength: 1,
        },
        x: {
          X: null,
          Strength: 0.1,
        },
        y: {
          Y: null,
          Strength: 0.1,
        },
        radial: {
          X: null,
          Y: null,
          R: 100,
          Strength: 1,
        },
        manyBody: {
          Strength: -30,
          Theta: 0.9,
          DistanceMin: 1,
          DistanceMax: 5000,
        },
        link: {
          Distance: 30,
          Strength: 0.1,
          Iterations: 1,
        },
        collide: {
          Radius: null,
          Strength: 1,
          Iterations: 1,
        },
      },
    };
  },
  computed: {
    drawData() {
      return this.$store.getters["force/drawData"];
    },
    vegaLiteData() {
      return this.$store.getters["force/vegaLiteData"];
    },
    carsData() {
      return this.$store.getters["force/carsData"];
    },
  },
  watch: {
    drawData(newVal) {
      if (newVal) {
        this.drawGraph();
      }
    },

    /* -------------------------------------------------------------------------- */
    // default config
    /* -------------------------------------------------------------------------- */
    alpha(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alpha = 1;
        } else if (newVal < 0) {
          this.alpha = 0;
        } else {
          this.baseConfigSet("alpha", newVal);
        }
      }
    },
    alphaMin(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaMin = 1;
        } else if (newVal < 0) {
          this.alphaMin = 0;
        } else {
          this.baseConfigSet("alphaMin", newVal);
        }
      }
    },
    alphaDecay(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaDecay = 1;
        } else if (newVal < 0) {
          this.alphaDecay = 0;
        } else {
          this.baseConfigSet("alphaDecay", newVal);
        }
      }
    },
    alphaTarget(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.alphaTarget = 1;
        } else if (newVal < 0) {
          this.alphaTarget = 0;
        } else {
          this.baseConfigSet("alphaTarget", newVal);
        }
      }
    },
    velocityDecay(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal > 1) {
          this.velocityDecay = 1;
        } else if (newVal < 0) {
          this.velocityDecay = 0;
        } else {
          this.baseConfigSet("velocityDecay", newVal);
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // center force config
    /* -------------------------------------------------------------------------- */
    setCenter(newVal) {
      if (newVal) {
        this.simulation.force(
          "center",
          d3
            .forceCenter(
              this.defaultForceConfig.center.X,
              this.defaultForceConfig.center.Y
            )
            .strength(this.defaultForceConfig.center.Strength)
        );
      } else {
        // remove center force
        this.simulation.force("center", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },

    centerX(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < 0) {
          this.conterX = 0;
        } else {
          this.forceConfigSet("center", "x", newVal);
        }
      }
    },
    centerY(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < 0) {
          this.conterY = 0;
        } else {
          this.forceConfigSet("center", "y", newVal);
        }
      }
    },
    centerStrength(newVal, oldVal) {
      if (newVal !== oldVal) {
        if (newVal < -1) {
          this.centerStrength = -1;
        } else {
          this.forceConfigSet("center", "strength", newVal);
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // position force config
    /* -------------------------------------------------------------------------- */
    setX(newVal) {
      if (newVal) {
        const name = this.forceXMode;
        switch (name) {
          case "number":
            this.simulation.force(
              "x",
              d3.forceX(this.xX).strength(this.xStrength)
            );

            break;
          case "aggregate":
            this.simulation.force(
              "x",
              d3
                .forceX()
                .x((d) => {
                  return (+d.group + 1) * 100;
                })
                .strength(this.xStrength)
            );
            break;
        }
      } else {
        this.simulation.force("x", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },

    xX(newVal, oldVal) {
      if (this.setX) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.xX = 0;
          } else {
            this.forceConfigSet("x", "x", newVal);
          }
        }
      }
    },
    xStrength(newVal, oldVal) {
      if (this.setX) {
        if (newVal !== oldVal) {
          if (newVal < -1) {
            this.xStrength = -1;
          } else {
            this.forceConfigSet("x", "strength", newVal);
          }
        }
      }
    },

    setY(newVal) {
      if (newVal) {
        this.simulation.force("y", d3.forceY(this.yY).strength(this.yStrength));
      } else {
        this.simulation.force("y", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },

    yY(newVal, oldVal) {
      if (this.setY) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.yY = 0;
          } else {
            this.forceConfigSet("y", "y", newVal);
          }
        }
      }
    },
    yStrength(newVal, oldVal) {
      if (this.setY) {
        if (newVal !== oldVal) {
          if (newVal < -1) {
            this.yStrength = -1;
          } else {
            this.forceConfigSet("y", "strength", newVal);
          }
        }
      }
    },

    setRadicial(newVal) {
      if (newVal) {
        this.simulation.force(
          "radial",
          d3
            .forceRadial(this.radialR, this.radialX, this.radialY)
            .strength(this.radialStrength)
        );
      } else {
        this.simulation.force("radial", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },
    radialX(newVal, oldVal) {
      if (this.setRadicial) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.radialX = 0;
          } else {
            this.forceConfigSet("radial", "x", newVal);
          }
        }
      }
    },
    radialY(newVal, oldVal) {
      if (this.setRadicial) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.radialY = 0;
          } else {
            this.forceConfigSet("radial", "y", newVal);
          }
        }
      }
    },
    radialR(newVal, oldVal) {
      if (this.setRadicial) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.radialR = 0;
          } else {
            this.forceConfigSet("radial", "radius", newVal);
          }
        }
      }
    },
    radialStrength(newVal, oldVal) {
      if (this.setRadicial) {
        if (newVal !== oldVal) {
          if (newVal < -1) {
            this.radialStrength = -1;
          } else {
            this.forceConfigSet("radial", "strength", newVal);
          }
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // nbody force config
    /* -------------------------------------------------------------------------- */
    setManyBody(newVal) {
      if (newVal) {
        this.simulation.force(
          "charge",
          d3
            .forceManyBody()
            .strength(this.manyBodyStrength)
            .theta(this.manyBodyTheta)
            .distanceMin(this.manyBodyDistanceMin)
            .distanceMax(this.manyBodyDistanceMax)
        );
      } else {
        this.simulation.force("charge", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },
    manyBodyStrength(newVal, oldVal) {
      if (this.setManyBody) {
        if (newVal !== oldVal) {
          if (newVal < -500) {
            this.manyBodyStrength = -500;
          } else if (newVal > 500) {
            this.manyBodyStrength = 500;
          } else {
            this.forceConfigSet("charge", "strength", newVal);
          }
        }
      }
    },
    manyBodyTheta(newVal, oldVal) {
      if (this.setManyBody) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.manyBodyTheta = 0;
          } else if (newVal > 1) {
            this.manyBodyTheta = 1;
          } else {
            this.forceConfigSet("charge", "theta", newVal);
          }
        }
      }
    },
    manyBodyDistanceMin(newVal, oldVal) {
      if (this.setManyBody) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.manyBodyDistanceMin = 0;
          } else if (newVal > 1000) {
            this.manyBodyDistanceMin = 1000;
          } else {
            this.forceConfigSet("charge", "distanceMin", newVal);
          }
        }
      }
    },
    manyBodyDistanceMax(newVal, oldVal) {
      if (this.setManyBody) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.manyBodyDistanceMax = 0;
          } else if (newVal > 5000) {
            this.manyBodyDistanceMax = 5000;
          } else {
            this.forceConfigSet("charge", "distanceMax", newVal);
          }
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // link force config
    /* -------------------------------------------------------------------------- */
    setLink(newVal) {
      if (newVal) {
        // get links data
        const links = d3
          .select("#svg-container")
          .select("svg")
          .select("g.link-group")
          .selectAll("line")
          .data();
        this.simulation.force(
          "link",
          d3
            .forceLink(links)
            .id((d) => d.id)
            .distance(this.linkDistance)
            .strength(this.linkStrength)
            .iterations(this.linkIterations)
        );
      } else {
        this.simulation.force("link", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },

    linkDistance(newVal, oldVal) {
      if (this.setLink) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.linkDistance = 0;
          } else if (newVal > 300) {
            this.linkDistance = 300;
          } else {
            //   console.log("link");
            this.forceConfigSet("link", "distance", newVal);
          }
        }
      }
    },
    linkStrength(newVal, oldVal) {
      if (this.setLink) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.linkStrength = 0;
          } else if (newVal > 1) {
            this.linkStrength = 1;
          } else {
            //   console.log(newVal);
            this.forceConfigSet("link", "strength", newVal);
          }
        }
      }
    },
    linkIterations(newVal, oldVal) {
      if (this.setLink) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.linkIterations = 0;
          } else if (newVal > 500) {
            this.linkIterations = 500;
          } else {
            this.forceConfigSet("link", "iterations", newVal);
          }
        }
      }
    },
    /* -------------------------------------------------------------------------- */
    // collide force config
    /* -------------------------------------------------------------------------- */
    setCollide(newVal) {
      const that = this;
      if (newVal) {
        this.simulation.force(
          "collide",
          d3
            .forceCollide((d) => {
              if (d.showDetail) {
                return that.diagonal;
              } else {
                return that.circleR;
              }
            })
            .strength(this.collideStrength)
            .iterations(this.collideIterations)
        );
      } else {
        this.simulation.force("collide", null);
      }
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },
    collideStrength(newVal, oldVal) {
      if (this.setCollide) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.collideStrength = 0;
          } else if (newVal > 1) {
            this.collideStrength = 1;
          } else {
            //   console.log(newVal);
            this.forceConfigSet("collide", "strength", newVal);
          }
        }
      }
    },
    collideIterations(newVal, oldVal) {
      if (this.setCollide) {
        if (newVal !== oldVal) {
          if (newVal < 0) {
            this.collideIterations = 0;
          } else if (newVal > 500) {
            this.collideIterations = 500;
          } else {
            this.forceConfigSet("collide", "iterations", newVal);
          }
        }
      }
    },
  },
  methods: {
    // 载入nodes和links数据
    loadData() {
      this.$store.dispatch("force/loadData");
      this.$store.dispatch("force/loadCarsData");
    },

    /* -------------------------------------------------------------------------- */
    // base config
    /* -------------------------------------------------------------------------- */
    // 修正输入为空的情况
    handleBaseBlur(configType) {
      //console.log(target);
      if (!this[configType]) {
        this[configType] = this.defaultBaseConfig[configType];
      }
    },
    simStop() {
      this.simulation.stop();
    },

    // reset all base config to default
    simRestart() {
      if (this.simulation) {
        this.alpha = this.defaultBaseConfig.alpha;
        this.alphaMin = this.defaultBaseConfig.alphaMin;
        this.alphaDecay = this.defaultBaseConfig.alphaDecay;
        this.alphaTarget = this.defaultBaseConfig.alphaTarget;
        this.velocityDecay = this.defaultBaseConfig.velocityDecay;
        this.simulation.alpha(this.defaultBaseConfig.alpha);
        this.simulation.alphaMin(this.defaultBaseConfig.alphaMin);
        this.simulation.alphaDecay(this.defaultBaseConfig.alphaDecay);
        this.simulation.alphaTarget(this.defaultBaseConfig.alphaTarget);
        this.simulation.velocityDecay(this.defaultBaseConfig.velocityDecay);
        this.restart();
      }
    },

    // ?
    // rebind data of dom element(nodes and links) and sim system
    restart() {
      this.ticks = 0;
      // 获取原始绘画数据
      const data = this.drawData;

      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({ ...d }));
      const nodes = data.nodes.map((d) => ({ ...d, showDetail: false }));

      //  console.log(this.showIndex);

      if (this.showIndex.size)
        this.showIndex.keys().forEach((index) => {
          nodes[index].showDetail = true;
        });
      // console.log("nodes", JSON.parse(JSON.stringify(nodes)));

      const nodeG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.node-group");
      const linkG = d3
        .select("#svg-container")
        .select("svg")
        .select("g.link-group");
      //console.log("2: ", nodeG);

      // rebind data of dom elements
      nodeG.selectChildren("g").data(nodes).join("g");
      linkG.selectAll("line").data(links).join("line");
      // rebind data of simulation
      this.simulation.nodes(nodes);
      const linkForce = this.simulation.force("link");
      if (linkForce) this.simulation.force("link").links(links);

      // reset alpha to reheat
      this.simulation.restart();
    },
    // 设置 default config
    baseConfigSet(configType, newVal) {
      this.simulation[configType](newVal);
      if (configType !== "alpha") {
        this.simulation.alpha(this.alpha);
      }
      this.restart();
    },

    /* -------------------------------------------------------------------------- */
    // force config
    /* -------------------------------------------------------------------------- */
    forceConfigSet(forceType, configType, newVal) {
      //console.log(configType, newVal, typeof newVal);
      // since have set new force there, no need to reinitialize
      this.simulation.force(forceType)[configType](newVal);
      //console.log(forceType);

      this.simulation.alpha(this.alpha);
      this.simulation.restart();
      //this.restart();
    },
    forceDefaultSet(forceType) {
      switch (forceType) {
        case "center":
          this.centerX = this.defaultForceConfig.center.X;
          this.centerY = this.defaultForceConfig.center.Y;
          this.centerStrength = this.defaultForceConfig.center.Strength;
          break;
      }
      // reheat and restart
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
      //this.restart();
    },

    /* -------------------------------------------------------------------------- */
    // center force config
    /* -------------------------------------------------------------------------- */

    handleCenterBlur(configType) {
      const name = "center" + configType;
      if (!this[name]) this[name] = this.defaultForceConfig.center[configType];
    },

    /* -------------------------------------------------------------------------- */
    // vegaLite relative
    /* -------------------------------------------------------------------------- */
    drawVegaLite(g, index) {
      const that = this;

      // 获取data
      const data = g.datum()["vega-lite"];
      if (data) {
        // vega-lite config
        var yourVlSpec = {
          description: "A simple bar chart with embedded data.",
          // render as svg
          usermeta: { embedOptions: { renderer: "svg" } },
          // 由于还有坐标轴，实际的svg大小还要大些(+50)
          width: this.vegaLiteWidth,
          height: this.vegaLiteHeight,
          data: {
            values: data,
          },
          mark: { type: "bar", tooltip: true },
          encoding: {
            x: { field: "a", type: "ordinal" },
            y: { field: "b", type: "quantitative" },
          },
        };
      } else {
        // 数据里没有vega-lite数据的画，直接用官方数据例子中的一个
        {
          var yourVlSpec = {
            description: "Drag out a rectangular brush to highlight points.",
            usermeta: { embedOptions: { renderer: "svg" } },
            width: this.vegaLiteWidth,
            height: this.vegaLiteHeight,
            data: {
              values: this.carsData,
            },
            params: [
              {
                name: "brush",
                select: "interval",
                value: { x: [55, 160], y: [13, 37] },
              },
            ],
            mark: "point",
            encoding: {
              x: { field: "Horsepower", type: "quantitative" },
              y: { field: "Miles_per_Gallon", type: "quantitative" },
              color: {
                condition: {
                  param: "brush",
                  field: "Cylinders",
                  type: "ordinal",
                },
                value: "grey",
              },
            },
          };
        }
      }

      // select container by id
      // const id = "g-" + g.datum().id.replace(".", "");
      // const container = d3.select("#" + id);
      const container = g.select(".vega-lite-container");

      // create vega-lite svg
      vegaEmbed(container.node(), yourVlSpec).then((resulte) => {
        // 记录显示vega-lite图的index
        //console.log(typeof index);
        that.showIndex.set(index, resulte.view);
        // 提出svg元素，并去掉多余的div和details
        const svg = container.select("svg").attr("class", "vega-lite-graph");
        //console.log(container.attr("width"));
        container.node().appendChild(svg.node());
        container.style(
          "transform",
          `translate(${-that.vegaLiteWidth / 2 - that.axisOffsetX}px,${
            -that.vegaLiteHeight / 2 - that.axisOffsetY / 2
          }px)`
        );
        container.select("div").remove();
        container.select("details").remove();
        that.simulation.alpha(that.alpha);
        that.simulation.restart();
      });
    },
    deleteVegaLite(g, index) {
      this.showIndex.get(index).finalize();
      g.select(".vega-lite-graph").remove();
      this.showIndex.delete(index);
      this.simulation.alpha(this.alpha);
      this.simulation.restart();
    },
    /* -------------------------------------------------------------------------- */
    // other
    /* -------------------------------------------------------------------------- */
    toggleEditMode() {
      this.editMode = !this.editMode;
    },
    handleTabClick(tab, _event) {
      if (this.setX) {
        const name = tab.props.name;
        switch (name) {
          case "number":
            this.simulation.force(
              "x",
              d3.forceX(this.xX).strength(this.xStrength)
            );

            break;
          case "aggregate":
            this.simulation.force(
              "x",
              d3
                .forceX()
                .x((d) => {
                  return (+d.group + 1) * 100;
                })
                .strength(this.xStrength)
            );
            break;
        }
        this.simulation.alpha(this.alpha);
        this.simulation.restart();
      }
    },
    // initial drawing, create DOM elements and sim system
    drawGraph() {
      const that = this;
      // 获取绘画数据
      const data = this.drawData;
      // 创建原始数据的copy，因为 force simulation 会改变数组数据
      const links = data.links.map((d) => ({ ...d }));
      // 加入showDetail属性，控制vega-lite图的显示
      const nodes = data.nodes.map((d) => ({ ...d, showDetail: false }));
      //console.log(data.links);
      // 选择svg container
      const svgContainer = d3.select("#svg-container");
      // 获取container的宽和高
      const width = parseInt(svgContainer.style("width"), 10);
      const height = parseInt(svgContainer.style("height"), 10);
      const vWidth = this.vegaLiteWidth + this.axisOffsetX;
      const vHeight = this.vegaLiteHeight + this.axisOffsetY;
      const diagonal =
        Math.ceil(Math.sqrt(vWidth * vWidth + vHeight * vHeight)) / 2;
      // console.log(diagonal);

      // 先把svg图和nodes+links 元素画出来
      // 随便设置一个种类的颜色映射
      const color = d3.scaleOrdinal(d3.schemeCategory10);
      const selectedColor = "#c92a2a";
      // 创建svg
      const svg = svgContainer
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("viewbox", [-width, -height, width, height])
        .attr("style", "max-width: 100%; height: auto;");
      // 画links
      const linkGroup = svg
        .append("g")
        .attr("class", "link-group")
        .attr("stroke", "#99999999")
        .attr("stroke-opacity", 0.6)
        .selectAll("line")
        .data(links)
        .join("line")
        // link的value值映射到粗细
        .attr("stroke-width", (d) => Math.sqrt(d.value));
      //画nodes

      const circleGroup = svg
        .append("g")
        .attr("class", "node-group")
        .selectAll("g")
        .data(nodes)
        .join("g")
        // .attr("id", (d) => "g-" + d.id.replace(".", ""))
        .append("circle")
        .attr("stroke", function () {
          const gData = d3.select(this.parentNode).datum();

          return gData.showDetail ? "#555" : "#fff";
        })
        .attr("r", function () {
          const gData = d3.select(this.parentNode).datum();
          return gData.showDetail ? diagonal : that.circleR;
        })
        // node 进行分类颜色映射
        .attr("fill", function (d) {
          const gData = d3.select(this.parentNode).datum();
          return gData.showDetail ? "transparent" : color(d.group);
        })
        .attr("stroke-width", 1.5)
        .style("transition", "r 0.2s")
        .on("mouseover", function (event) {
          const d = d3.select(this.parentNode).datum();
          if (!d.showDetail) {
            //颜色变，表示被选中
            d3.select(this)
              .attr("fill", selectedColor)
              .attr("r", that.circleFocusR)
              .style("cursor", "pointer");
          }
        })
        .on("mouseout", function (event) {
          const d = d3.select(this.parentNode).datum();
          if (!d.showDetail) {
            d3.select(this)
              .attr("r", that.circleR)
              .attr("fill", (d) => color(d.group));
          }
        })
        .on("click", function (event, d) {
          // 获取选择circle对应的container - g元素
          const g = d3.select(this.parentNode);
          const circle = d3.select(this);
          const showDetail = !g.datum().showDetail;
          //console.log(showDetail);
          g.datum().showDetail = showDetail;
          // reinitialize the collide force, if set
          const collideForce = that.simulation.force("collide");
          if (collideForce) collideForce.initialize(that.simulation.nodes());
          if (showDetail) {
            circle
              .attr("r", diagonal)
              .attr("fill", "transparent")
              .attr("stroke", "#555");
            that.drawVegaLite(g, d.index);
          } else {
            that.deleteVegaLite(g, d.index);
            circle
              .attr("r", that.circleR)
              .attr("stroke", "#fff")
              .attr("fill", (d) => color(d.group));
            //that.showIndex.delete(d.index);
          }
        });

      const containerGroup = d3
        .select("#svg-container")
        .select("svg")
        .select("g.node-group")
        .selectAll("g");
      // containerGroup.datum(null);
      // nodeGroup.data(nodes);
      const vegaLiteContainerGroup = containerGroup
        .append("g")
        .attr("class", "vega-lite-container");
      /* -------------------------------------------------------------------------- */
      const defaultBaseConfig = this.defaultBaseConfig;
      const defaultForceConfig = this.defaultForceConfig;

      // 力导向系统创建
      const simulation = d3
        .forceSimulation(nodes)
        .force(
          "link",
          // 指明对应的是nodes数据的id属性
          d3
            .forceLink(links)
            .id((d) => d.id)
            .distance(defaultForceConfig.link.Distance)
            .iterations(defaultForceConfig.link.Iterations)
          // .strength(defaultForceConfig.link.Strength)
        )
        .force(
          "charge",
          d3
            .forceManyBody()
            .strength(defaultForceConfig.manyBody.Strength)
            .theta(defaultForceConfig.manyBody.Theta)
            .distanceMin(defaultForceConfig.manyBody.DistanceMin)
          // .distanceMax(defaultForceConfig.manyBody.DistanceMax)
        )
        .force(
          "center",
          d3
            .forceCenter(width / 2, height / 2)
            .strength(defaultForceConfig.center.Strength)
        )
        .alpha(defaultBaseConfig.alpha)
        .alphaMin(defaultBaseConfig.alphaMin)
        .alphaTarget(defaultBaseConfig.alphaTarget)
        .alphaDecay(defaultBaseConfig.alphaDecay)
        .velocityDecay(defaultBaseConfig.velocityDecay)
        .on("tick", ticked);

      // 每次迭代回调函数，更新结点位置
      function ticked() {
        that.ticks++;
        linkGroup
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y);

        // 只通过transform.translate 更新父元素g的位置
        containerGroup.style("transform", (d) => {
          return `translate(${d.x}px,${d.y}px)`;
        });
        // // 更新圆的位置，但是数据是挂在父节点g上的
        // circleGroup
        //   .attr("cx", function () {
        //     return d3.select(this.parentNode).datum().x;
        //   })
        //   .attr("cy", function () {
        //     return d3.select(this.parentNode).datum().y;
        //   });

        // // 让挂载vega-lite图的容器g元素也跟着动
        // vegaLiteContainerGroup.style("transform", function () {
        //   const x = d3.select(this.parentNode).datum().x;
        //   const y = d3.select(this.parentNode).datum().y;
        //   return `translate(${
        //     x - that.vegaLiteWidth / 2 - that.axisOffsetX
        //   }px,${y - that.vegaLiteHeight / 2 - that.axisOffsetY / 2}px)`;
        // });
      }

      // 设置结点拖动行为，也是只在圆上设置，避免与vega-lite图的鼠标事件冲突
      circleGroup.call(
        d3
          .drag()
          .container(function () {
            // set container to svg
            return svg;
          })
          .subject(function (event) {
            // 将父元素 g 作为 subject 返回 (因为数据挂载在父元素g上)
            return d3.select(this.parentNode).datum();
          })
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

      // 拖动开始时，重新加热迭代过程，并且修正被拖动点的fx,fy
      function dragstarted(event) {
        if (!event.active)
          simulation
            .alphaTarget(
              +that.alphaTarget + 0.3 > 1 ? 1 : +that.alphaTarget + 0.3
            )
            .restart();
        // const g = d3.select(this.parentNode);
        // g.datum().fx = g.datum().x;
        // g.datum().fy = g.datum().y;
        // console.log("1", event);
        //console.log(event);
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
      }

      // 拖动时，让点跟着鼠标走
      function dragged(event) {
        // 这里必须select this，不能通过 event 访问父节点。event可以选中其他东西

        // const g = d3.select(this.parentNode);
        // g.datum().fx = event.x;
        // g.datum().fy = event.y;
        // console.log("2", event);

        event.subject.fx = event.x;
        event.subject.fy = event.y;
      }

      // 拖动结束，降温
      function dragended(event) {
        if (!event.active) simulation.alphaTarget(that.alphaTarget);
        // const g = d3.select(this.parentNode);
        // g.datum().fx = null;
        // g.datum().fy = null;
        event.subject.fx = null;
        event.subject.fy = null;
      }

      // 设置整体zoom行为,只选择最顶层的2个g即可
      const group = svg.selectChildren("g");
      //console.log(group);
      // 创建缩放函数
      const zoom = d3
        .zoom()
        .scaleExtent([0.5, 30]) // 设置缩放的范围
        .translateExtent([
          [0, 0],
          [width, height],
        ])
        .on("zoom", zoomed);

      //svg.call(zoom);
      // 定义zoom的回调函数
      function zoomed(event) {
        const transform = event.transform;
        // 更新地理路径组的变换属性
        group.attr("transform", transform);
      }

      // initialize the default data
      this.diagonal = diagonal;
      this.simulation = simulation;
      this.centerX =
        this.defaultForceConfig.center.X =
        this.xX =
        this.defaultForceConfig.x.X =
        this.radialX =
        this.defaultForceConfig.radial.X =
          width / 2;
      this.centerY =
        this.defaultForceConfig.center.Y =
        this.yY =
        this.defaultForceConfig.y.Y =
        this.radialY =
        this.defaultForceConfig.radial.Y =
          height / 2;
      this.defaultForceConfig.collide.Radius = this.collideRadius =
        this.circleR;
    },
  },

  created() {
    this.loadData();
  },
};
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
}
#svg-container {
  height: 100%;
  width: 100%;
}

.edit-panel {
  position: absolute;
  top: 5%;
  left: 1%;
  z-index: 10;
  height: 90%;
  overflow: auto;
}
.edit-panel:not(.el-menu--collapse) {
  width: 200px;
}

/* scroll bar hide */
.edit-panel {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.edit-panel::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

.edit-btn {
  position: fixed;
  bottom: 5%;
  right: 3%;
}

.ticks-card {
  position: fixed;
  top: 5%;
  right: 3%;
  padding: 1vw;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.active-btn {
  box-shadow: inset 2px 2px 16px #4444442a, inset -2px -2px 16px #4444442a;
}

.btn {
  border-radius: 12px;
}
</style>

<!-- Animation -->
<style scoped>
.slide-enter-active {
  transition: all 0.3s ease-out;
}

.slide-leave-active {
  transition: all 0.3s ease-in;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-200px); /* 初始状态和最终状态 */
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0); /* 平移隐藏 */
}
</style>

<!-- form -->
<style scoped>
.el-menu-item {
  height: fit-content;
}
.form {
  padding: 0.8vw 2vw 1vw 2vw;
}

.form-item-control {
  margin-bottom: 10px;
}
.config-btn {
  font-size: 100%;
  flex: 1 1 50%;
}

.form-btn-control {
  display: flex;
  gap: 0.5vw;
  width: 100%;
}
.btn-label {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.input-control {
  /* width: 90%; */
}
</style>

<style scoped>
.el-slider {
  width: 100%;
}
.bugfix {
  margin-top: 10px;
}
</style>
<style>
.el-form-item__label {
  margin-bottom: 2px !important;
}
.el-tabs__content {
  display: flex;
  align-items: center;
}
</style>
