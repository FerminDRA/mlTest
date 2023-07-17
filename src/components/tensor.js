import { Component } from "react";
import * as tf from '@tensorflow/tfjs';


const MODEL = tf.sequential();
MODEL.add(tf.layers.dense({units: 1, inputShape: [1]}));
MODEL.compile({loss:'meanSquaredError',
optimizer:'sgd'});
MODEL.summary();
const xs = tf.tensor2d([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], [6, 1]);
const ys = tf.tensor2d([-3.0, -1.0, 2.0, 3.0, 5.0, 7.0], [6, 1]);

export default class tenso extends Component {

    
    async doTraining(){
        await MODEL.fit(xs, ys,
            { epochs: 500,
            callbacks:{
            onEpochEnd: async(epoch, logs) =>{
            console.log("Epoch:" + epoch
                         + "Loss:" + logs.loss);}
                                             }
            });
    }

    //async predict(){
    //    await this.doTraining(MODEL).then(() => {
    //        alert(MODEL.predict(tf.tensor2d([10], [1,1])));
    //    });
    //}

    async predict(){
        alert(MODEL.predict(tf.tensor2d([10], [1,1])));
    }
    render() {
        return (
          <div className="divButton">
            <button onClick={() => this.doTraining()}>doTraining</button>
            <button onClick={() => this.predict()}>Predict</button>
          </div>
        );
      }
}