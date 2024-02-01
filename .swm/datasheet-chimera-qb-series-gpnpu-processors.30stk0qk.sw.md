---
id: 30stk0qk
title: Datasheet - Chimera QB Series GPNPU Processors
file_version: 1.1.2
app_version: 1.11.9
---

Modern System-on-Chip (SoC) architectures deploy complex algorithms that mix traditional C++ based code with newly emerging and fast-changing machine learning (ML) inference code.  This combination of graph code commingled with C++ code is found in numerous chip subsystems, most prominently in vision and imaging subsystems, radar and lidar processing, communications baseband subsystems, and a variety of other data-rich processing pipelines.  Only Quadric’s Chimera™ GPNPU (general purpose neural processing unit) architecture can deliver high ML inference performance and run complex, data-parallel C++ code on the same fully programmable processor.  Compared to other ML inference architectures that force the software developer to artificially partition an algorithm solution between two or three different kinds of processors, Quadric’s Chimera processors deliver a massive uplift in software developer productivity while also providing current-day graph processing efficiency coupled with long-term future-proof flexibility.  

Quadric’s Chimera GPNPUs are licensable processor IP cores delivered in synthesizable source RTL form.  Blending the best attributes of both neural processing units (NPUs) and digital signal processors (DSPs), Chimera GPNPUs are aimed at inference applications in a variety of high-volume end applications including mobile devices, digital home applications, automotive and network edge compute systems.

## Key Benefits

*   Software development productivity:  Run DSP and ML code on one processor – no need to artificially partition your application. 

*   Hardware design simplicity: Integrate a single GPNPU core instead of a CPU plus DSP plus NPU

*   Future proof, no-limits machine learning:  Fully C++ programmable processor can run any ML network, any operator in a high-performance, parallel implementation.  New custom operators run as fast as “native” operators.

*   High MAC utilization on ML graph code – utilization competitive with dedicated offload accelerators.  Delivers high Inference per Second throughput while maintaining programmability.

*   Higher efficiency and lower power – eliminates switching between DSP and NPU.

*   Scalable performance: code written for one Chimera core runs at-speed on other QB Series family cores.

*   Ease of development: Develop code online in the Quadric Developers Studio or on-premise with the Chimera Software Developers Toolkit (SDK).

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8%3D%2Fae859777-d734-442d-b5b1-03fc740e5777.png?alt=media&token=99e99f0b-9fa8-4021-a98a-d866122ac223" style="width:'100%'"/></div>

<br/>

_Figure A. Chimera QB Series ranges from 1 TOPS to 16 TOPS_

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8%3D%2Fdd884dd8-aa98-4125-ae04-c6de09ebaad4.png?alt=media&token=0ee3d326-098a-4900-832d-371eb95e4cca" style="width:'100%'"/></div>

<br/>

_Figure B. Chimera GPNPU block diagram_

# Key Architectural Features of Chimera GPNPU Processors

*   Hybrid Von Neuman + 2D SIMD matrix architecture

*   64b Instruction word, single instruction issue per clock

*   7-stage, in-order pipeline

*   Scalar / vector / matrix instructions modelessly intermixed with granular predication  

*   Deterministic, non-speculative execution delivers predictable performance levels

*   AXI Interfaces to system memory (independent data and instruction access)

*   Instruction cache (256K)

*   Distributed tightly coupled local register memories (LRM) with data broadcast networks within matrix array allows overlapped compute and data movement to maximize performance

*   Local L2 data memory (multi-bank, configurable 2MB to 32MB) minimizes off-chip DDR access, lowering power dissipation

*   Optimized for INT8 machine learning inference (with optional INT16 support)

*   Compiler-driven, fine-grained clock gating delivers power savings 

## Single Integrated Core Runs Scalar Code + Vector DSP Code + ML Graph Code

Application code mixing C++ DSP code with ML graph code runs on a single integrated processor pipeline, as shown in Figure C.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8%3D%2Fcf69ca61-3355-4ea4-bb23-f78581f2df46.png?alt=media&token=5caec681-0b8e-428b-8695-d4fbad16020e" style="width:'100%'"/></div>

<br/>

_Figure C. Chimera GPNPU 7-stage, in-order pipeline_

## High ML TOPs Efficiency plus Massive DSP Throughput

Chimera GPNPUs are optimized for machine learning inference performance, delivering high MAC utilizations (see Table 1) on key graph operators that dominate ML inference workloads.

<br/>

|               |                    |
|---------------|--------------------|
|Operator       |MAC Utilization Rate|
|Convolution 1x1|73.8%               |
|Convolution 3x3|75.4%               |
|Convolution 5x5|83.6%               |
|Convolution 7x7|85.2%               |

<br/>

_Table 1: MAC utilization rates across an entire operator kernel for select NN operators on Image size of (64,64) pixels from RESNET50 network_

The Chimera GPNPU architecture also can deliver massive traditional DSP throughput.  A single Chimera core delivers high ML horsepower equivalent to a dedicated NPU and far greater DSP capability than any commercially available wide-vector VLIW DSP core – up to 1 TOPS of DSP performance (32b operations).   Thus, a single GPNPU is a superior design alternative to pairing discrete DSPs and NPUs together in an SoC offering better performance, lower power, _and_ a simpler programming model.

## Fully Programmable Machine Learning – Without FallBack

The Chimera GPNPUs are programmable processors.  They can run **any** ML operator, any topology or shape of ML network.   Unlike fixed-function deep learning accelerators that support a limited set of hardwired graph operators, the Chimera core will never “break” when the newest ML operator is introduced by tomorrow’s data scientists.  Any operator or sub-graph that can be written in C++ using our proprietary Chimera Compute Library (CCL) API will run on a Chimera core and deliver high performance for that new operator.  

Other licensable IP solutions for machine learning combine a high-performance hardwired accelerator with one or two separate programmable engines. While those competing solutions can claim to support future operators, they do so by running the new operator on the slow, general-purpose programmable CPU or DSP.  This so-called _operator fallback_ dooms these solutions to a dramatic falloff in performance because the custom operators run on a machine with only dual or quad MACs instead of the accelerator with 4K or 8K MAC units. The 1000X slowdown - plus the overhead of data transfer between cores - cripples system performance, rendering the promise of custom operators by many competing IP cores hollow. 

In sharp contrast to those other NPU solutions, Quadric’s Chimera GPNPUs run your custom operators at full speed, on the same highly parallel engine as the “native” operators and without any need to transfer data between heterogeneous cores.   Fully programmable machine learning on a Chimera GPNPU means _full-speed, fully programmable_ ML.

## Rich DSP and Matrix Instruction Set

The Chimera instruction set implements a rich set of operations covering the breadth of control, DSP and tensor graph processing.  The base Chimera processing element (PE) is optimized for 8-bit integer deep learning operations with a configurable hardware option to also include 16bit MAC hardware.  In addition to the ML-focused multiply-accumulate hardware, a full set of math functions is available in each ALU to support all forms of complex DSP operations:

*   32bit Integer MUL / ADD / SUB / Compare

*   32bit Integer DIV (iterative execution)

*   32bit Cordic function unit (Sine, cosine, Rect. to Polar / Polar to Rect., ArcX functions)

*   Logarithmic and Exp functions

A set of math function libraries harnessing these special function instructions accompanies the Chimera SDK, covering an array of common signal processing routines including cordic, linear algebra, filtering and image processing functions.

# Efficient Memory Subsystem 

Machine Learning inference solutions are most often performance- and power-dissipation-limited by memory system bandwidth utilization.   With most state-of-the-art ML models having hundreds of thousands or millions of parameters, fitting an entire ML model into on-chip memory within an advanced System-on-a-Chip (SoC) is generally not possible.  Therefore, smart management of available on-chip data storage of both weights and activations is a prerequisite to achieving high efficiency.  To further complicate the design of SoCs the rate of change of ML models – both operator types and model topologies – far outpaces the design and deployment lifecycles of modern SoC designs.  System architects must pick IP today to run models of unknown complexity in the coming years.

Many first-generation deep learning accelerators in systems today are hardwired finite state machines (FSM) that offload several performance intensive building-block ML operators such as convolution and pooling.  These FSM solutions deliver high efficiency only if the ultimate network to be run on the SoC does not waver from the limited scope of the operator parameters that have been hard-coded into the silicon.  This hard-coded behavior extends to the supported memory management strategies deployed for those FSM accelerators.  An FSM solution does not allow for future fine-tuning of memory management strategies as network workloads evolve.  The Chimera GPNPU family solves this limitation by being fully programmable and compiler driven.

A SoC design with a Chimera GPNPU has four levels of data storage (Figure C).  Off-chip DDR offers a vast lake of storage for even the largest of ML models.  But accessing DDR is expensive both in terms of power dissipation and cycle count.  Therefore, the Chimera GPNPU contains a large, private buffer SRAM on chip - the L2 memory – which is managed by compiler-driven code.  L2 size is determined by the SoC architect at chip design time and can range from 2 MB to 32 MB.   L2MEM holds data that is temporally beneficial in speeding up algorithm execution, such as model weights and activations for deep neural networks and a variety of data and coefficients for DSP algorithms.  The partitioning of the usage of L2 is software and compiler driven, offering long-term flexibility to adapt to changing ML inference workloads.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8%3D%2Ff91b5956-44f5-434a-bc4b-551e805b34b2.png?alt=media&token=8725ca93-b576-410f-8874-f1d62b3951e4" style="width:'100%'"/></div>

<br/>

_Figure D. Chimera Memory Hierarchy_

A Chimera GPNPU family also has internal tightly-coupled, local register memory (LRM) distributed throughout the array of matrix/DSP processing elements (PE).  Each PE contains a 4KB LRM which is managed by the compilers for local storage of both incoming activations and intermediate results.  This relatively large local data storage allows many intermediate values to stay resident in the LRM as the processor cycles thru layers of an ML graph or loops of a DSP program. LRM is accessible in a single clock cycle and drives very short wires within the Chimera core, thus data transfers to and from LRM are high performance and very low power.

The fourth and final level of memory hierarchy is the set of 32 architectural core registers (flop based) inside each PE.  Code generated by the LLVM C++ Compiler uses this rich set of local storage for immediate passing of arguments between instructions in the Chimera code stream – the lowest possible energy consumption for passing, for instance, intermediate activation data from one operator to the next in an ML graph (see Table 2).

Management of data movement through all four levels of data storage is completely managed by code generated by the two levels of advanced compilation technologies in the Quadric Chimera software stack. The Chimera Graph Compiler (CGC) comprehensively analyzes the incoming ML graph and searches for optimal timings and layouts of tensors across the DDR / L2 / LRM memory space.  CGC emits function calls in the CCL API to invoke DMA calls that prefetch and position data for high performance and minimal off-chip data movement.  Then the Quadric LLVM compiler further optimizes the local usage of LRM and the core register file to squeeze out maximum performance and minimize power-hungry data movement to the larger memories.

Compared to the fixed-function, hard-coded memory access schemes found in alternative accelerator cores the Quadric memory hierarchy and compiler approach offers both high-efficiency and future flexibility to adapt as the compiler technology matures and ML graphs evolve.

<br/>

|                                                                     |    |
|---------------------------------------------------------------------|----|
|**Approximate Energy Cost of 32b data element transfer from ALU/MAC**|    |
|Register file                                                        |1X  |
|LRM                                                                  |3X  |
|L2 Memory                                                            |70X |
|Off-chip DDR                                                         |225X|

<br/>

_Table 2 – Energy costs for element transfers_

# Chimera Software Development Toolkit 

The Quadric Chimera Software Development Toolkit (SDK) is a comprehensive environment for the development of complex application code targeting the Chimera GPNPU.  The Quadric SDK enables the mixing and matching of any data parallel algorithm whether it is expressed as machine learning graph or as traditional C++ code.

<br/>

<div align="center"><img src="https://firebasestorage.googleapis.com/v0/b/swimmio-content/o/repositories%2FZ2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8%3D%2Fcd22cd5d-26ed-44bb-b1a5-02e0d1d9d6ec.png?alt=media&token=08663933-e8a7-4ebc-a48a-3bcd75730099" style="width:'100%'"/></div>

<br/>

_Figure E. Chimera SDK Overview_

**Online or On Premise**

Users can access the full Chimera SDK online via our Quadric Developers Studio, available at [https://studio.quadric.io/login](https://studio.quadric.io/login). With a visual drag-n-drop front end, developers can mix and match pre-existing optimized libraries of C++ preprocessing and post-processing kernels with a variety of ready-made machine learning models to rapidly test out an application code chain.  Or upload your own proprietary C++ code and machine learning models, compile them in the Quadric Chimera toolflow and profile on the System-C cycle approximate model of the Chimera GPNPU.

Users can also download a complete Docker image of the Chimera SDK for deployment on private clouds or on-premise systems.

## Chimera Graph Compiler

The Quadric Chimera Graph Compiler (CGC) is a powerful conversion and code optimization tool that inputs a machine learning inference model created from the leading ML training frameworks, performs numerous optimizations, and outputs an optimized C++ code representation of the ML graph utilizing the Chimera Compute Library (CCL) for later compilation by the Chimera LLVM C++ compiler.  

**Graph Import**

CGC accepts input graphs in ONNX format for networks developed in PyTorch, TensorFlow or other frameworks.  A number of optimizations are performed as part of the graph import phase:   

*   Graph simplification / canonicalization

*   Constant propagation - removing operators with purely constant arguments, if possible

*   Operator legalization / conversion – converting to GPNPU-specific forms of ML operators

The shape and structure of the network graph is optimized to simplify operators where possible.  Compatibility checks are performed to determine if all operators are supported.  When an unsupported or custom operator is present in the source graph, the user has the option to partition the graph around the custom operator, write a C++ model for the unsupported operator, and reintegrate the new custom operator C++ kernel with CCL code generated by CGC.

**Graph optimization**

CGC creates a full intermediate representation of the ML graph and performs multiple passes of optimization with the twin aims of optimizing performance and memory bandwidth utilization.  

Compute optimization techniques employed include:

*   Re-quantization rescheduling (with activation range analysis) to maintain higher precision accuracy when intermediate results are locally resident in the register file, but store more compact 8-bit intermediate values into SRAM (LRM, L2) or DDR.

*   Arithmetic simplifications / operator fusions (arithmetic equivalent substitutions)

*   Parallel graph serialization (compute intensity sorted)

*   Operator implementation selection (many operators have several different C++ implementation choices) based on data movement cost minimization 

*   Common Sub-expression Elimination and Dead Code Elimination (when applicable)

Memory optimization techniques include:

*   Tensor format layout analysis (both L2 and LRM)

*   Array-level memory adapters & tensor shape transformations

*   Bank conflict minimization, defragmentation 

*   Predictive weight prefetching

## Chimera Compute Library (CCL) API

Writing high-performance code for Quadric’s Chimera GPNPUs is enabled by the use of the Chimera Compute Library (CCL) application programming interface (API).   The CCL API includes the Tensor Accessors construct that empowers the developer to specify data access patterns common to neural networks and other algorithms with a handful of lines of API code.  The CCL API and CGC then automatically setup all the external DMA transfers (from DDR to L2 memory) and internal DMA transfers (from L2 memory to LRM) necessary to overlap DMA with compute.  High performance compute kernels can therefore hide most or all data access latencies and deliver maximum ML and DSP performance.

## Chimera LLVM C++ Compiler

The Chimera LLVM C++ compiler utilizes the industry state of the art LLVM compiler infrastructure with a Quadric-specific code generation back end that emits assembly code specific to the Chimera instruction set.

## Chimera Instruction Set Simulator

The Chimera Instruction Set Simulator (ISS) is an executable model of the Chimera GPNPU core that is bundled with the Chimera SDK.  The ISS can be utilized both in a standalone mode to profile and tune application code in isolation, or as a callable System C transaction level model bundled into a more comprehensive virtual prototype of an SoC where more accurate memory model behavior can be used to fine-tune your Chimera code more precisely. 

*   ISS stand-alone mode

    *   Approximately timed model (performance accurate to +/- 5%)

    *   Models all architectural state to provide debug visibility

    *   Models all core-internal LRM RAMs and the L2 RAM

    *   Include a simplistic model of all other memory space (on the AXI port) with a user selectable average read & write delay function

*   SystemC mode - Integrates into your larger SoC system simulation

    *   Build more complex SystemC models with real memory subsystem behavior

    *   Integrate with other processors to simulate system traffic impacts, DDR controller behaviors, stimulus/activation data generated by other SoC components, and more.

# Memory and Interface Features

## System Memory Interfaces

A Chimera GPNPU has 3 main interfaces to an SoC’s AXI-based bus or network on chip (NoC) fabric. A range of configurable sizes allows a Chimera core’s external bandwidth to be matched to the anticipated system & application requirements.

<br/>

|                |               |                                    |                       |
|----------------|---------------|------------------------------------|-----------------------|
|<br/>           |Interface Type |Function                            |Configuration Options  |
|Instruction Port|AXI-4 Initiator|Instruction cache fill              |128b width             |
|Debug Port      |APB            |Host CPU access to control registers|32b width              |
|Data Memory Port|AXI-4 Initiator|L2 Memory to External memory        |64b / 128b / 256b width|

<br/>

_Table 3. System memory interfaces_

<br/>

## Instruction Cache Features

*   2-way set associative, 256KB instruction cache.  4KB line size.

*   4GB instruction space; base start location programmable by the host 

*   Hardware prefetch or Available software prefetch commands

## Local Tightly Coupled Data Memory

Each Chimera GPNPU configuration has local tightly coupled local register memories (LRM) associated with the scalar execution pipeline and the matrix/vector execution pipeline.

<br/>

|     |                   |              |
|-----|-------------------|--------------|
|<br/>|Processing Elements|Total LRM SRAM|
|QB1  |64                 |576 KB        |
|QB4  |256                |1.6 MB        |
|QB16 |1024               |5.2 MB        |

<br/>

_Table 4. Tightly coupled Local Register Memory_<br/>

## L2 Memory – On Chip Data Buffer Memory

The L2 memory within a Chimera GPNPU is configurable with size options from 2 MB to 32 MB.<br/>

# Operating Specifications & EDA Support

The nominal TOPS rating of the three family members of the Quadric Chimera QB Series is predicated upon a 1 GHz operating clock frequency.   Included with the Chimera QB series hardware deliverables is a set of reference EDA scripts for the Synopsys suite of EDA tools (Fusion Compiler) for 7nm implementation.    Exact area, power and clock rate (performance) of an implementation of a Chimera GPNPU will vary with the designer’s choice of process technology, metal stack, cell library, chosen SRAM vendor, feature set selection, design rules, and EDA optimization techniques employed.   

## Optimized Power Savings

Several layers of power minimizations techniques are employed in a Chimera GPNPU.  Two of these key elements are a software-controlled low-power sleep mode clock gating, and a fine-grained predicated power gating.   Sleep mode allows a programmer to explicitly clock-gate entire sections of the 2-D array of PEs when it is known that portions of the array will not be needed for an extended period of execution and then explicitly wake those elements up again once that compute kernel is complete.   Predicated power-gating is invisibly and automatically implemented on an individual PE basis when a predicated instruction determines that no computation is required within a given PE for that instruction.

<br/>

_All specifications are subject to revision_

_For more information, please contact Quadric or visit_ [_www.quadric.io_](http://www.quadric.io)_. Quadric is a registered trademark and Chimera is a trademark of Quadric Inc. All content copyright © 2023 Quadric Inc._

<br/>

This file was generated by Swimm. [Click here to view it in the app](https://app.swimm.io/repos/Z2l0aHViJTNBJTNBc2RrLWNsaSUzQSUzQXF1YWRyaWMtaW8=/docs/30stk0qk).
