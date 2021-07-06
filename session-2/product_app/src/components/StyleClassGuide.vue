<hr />
      <div class="row">
        <div class="col-12">
          <strong>In-Line style binding:</strong>
          <!-- inline css style binding -->
          <!-- camel case  as 'fontSize' -->
          <p :style="{ fontSize: fontSize }">Text Font Size</p>
          <!-- kebab case 'font-size' -->
          <p :style="{ 'font-size': fontSize }">Text Font Size</p>
          <!-- value from data property (here 'color' is css property and 'colorProperty' data property ) -->
          <p :style="{ color: colorProperty }">Text color</p>
          <!-- style binding as object  (styleObj1 => data property)-->
          <p :style="styleObj1">Style as object</p>
          <!-- style binding with array of object data property -->
          <p :style="[styleObj1, styleObj2]">Style as object</p>
        </div>
        <div class="col-12">
          <strong>Css Class binding:</strong>
          <p>
            <!-- Conditional css class binding -->
            <input
              type="button"
              value="Add to Cart"
              :class="{ btnDisabled: !inStock }"
            />
            <!-- default and Conditional css class binding -->
            <input
              type="button"
              value="Add to Cart"
              :class="['btn', { btnDisabled: !inStock }]"
            />
            <!-- we can use ternary operator for adding conditional class  -->
            <input
              type="button"
              value="Add to Cart"
              :class="['btn', !inStock ? 'btnDisabled' : '']"
            />
            <!-- We can add multiple css class in array form -->
            <input
              type="button"
              value="Add to Cart"
              :class="[btn, btnDisabled]"
            />
            <!-- Conditional css class binding -->
          </p>

          <p :class="{ success: successClass, error: errorClass }">
            Message here...
          </p>
          <!-- css class binding as object  (classObj => data property)-->
          <p :class="classObj">Message here...</p>
        </div>
      </div>
    </div>